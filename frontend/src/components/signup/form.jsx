import React, { useState } from "react";
import NavBar from "../lib/navbar";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import { storage } from "../uploadimage/firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
    interests: "Heli-skiing",
    birthday: "",
    gender: "",
  });

  const UploadProfileImage = (image) => {
    const imageRef = ref(storage, `imageprofile/${image.name + Date.now()}`);
    return uploadBytes(imageRef, image).then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    });
  };

  const sendFormData = async (url) => {
    const response = await fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, profilePic: url }),
    });

    if (response.status === 201) {
      navigate("/login");
    } else {
      alert("User already exists");
    }
  };

  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/mernsters.appspot.com/o/imageprofile%2Fchumpinhat.jpeg1669738606266?alt=media&token=a008d56f-b7d4-4922-976d-a73067e36691";

  // function that sends post signup request to backend
  const submitForm = () => {
    if (formData.profilePic === "") {
      sendFormData(defaultImage);
    } else {
      UploadProfileImage(formData.profilePic).then((url) => {
        sendFormData(url);
      });
    }
  };

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <NavBar linkTo="login" />
      <div className="form"></div>

      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1>{FormTitles[page]}</h1>
        </div>

        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            className="prev-btn"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </button>

          <button
            className="next-btn"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                submitForm();
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
