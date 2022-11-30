import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatCard.css";
// import '/Users/saritaradia/Desktop/Projects/MERNsters-inc/backend/models/chat.js'

export default function ChatCard(props) {
  // Move chat fields here
  // profile pic
  // first name and last name?
  // message
  // timestamp  
  // const {
  //   image,
  //   from,
  //   time,
  //   subject,
  //   body,
  //   hasAttachment,
  //   isSelected,
  //   onClick,
  // }
  
  const {
    image,
    firstName,
    time,
    summary,
    isSelected,
    onClick,
  }= props;
  return (
    <div
      className={`${
        isSelected
          ? "bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl"
          : ""
      } flex flex-row py-10 px-6 hover:bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl`}
    >
      <div className={`w-12 h-10 mt-3 rounded-xl ${image}`}></div>
      <div className="flex flex-col w-full ml-3">
        <div className="flex items-center mt-2">
          <span className="text-xs text-light-500 font-medium mr-auto">
            {firstName} 
          </span>

        </div>
        <span className="text-sm text-light-200 font-medium mt-2">
          {summary}
        </span>
        {/* <span className="clamp text-xs font-normal text-light-500 mt-4 w-full">
          {body}
        </span> */}
      </div>
    </div>
  );
}