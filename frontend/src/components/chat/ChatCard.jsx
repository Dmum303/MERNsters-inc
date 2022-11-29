import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChatCard.css";
import './backend/models/chat.js'

export default function ChatCard(props) {
  // Move chat fields here
  // profile pic
  // first name and last name?
  // message
  // timestamp  
  const {
    user_id,
    firstName,
    lastName,
    message,
    // body,
    hasAttachment
    // isSelected,
    // onClick,
  } = props;
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
            {from}
          </span>
          {hasAttachment ? (
            <FontAwesomeIcon
              icon={faPaperclip}
              className="text-light-500 mr-2"
            />
          ) : null}
          <span className="text-light-500 bg-dark-400 text-xs font-medium px-3 py-1 rounded-xl">
            {time}
          </span>
        </div>
        <span className="text-sm text-light-200 font-medium mt-2">
          {subject}
        </span>
        <span className="clamp text-xs font-normal text-light-500 mt-4 w-full">
          {body}
        </span>
      </div>
    </div>
  );
}