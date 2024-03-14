import React, { useEffect, useState } from "react";
import Replies from "./Replies";

const Comment = ({
  currentUser,
  content,
  profilePic,
  userName,
  createdAt,
  replies,
  score,
}) => {
  const activeUser = () => {
    return currentUser === userName;
  };

  const [commentScore, setCommentScore] = useState(score);

  const handleUnVote = (e) => {
    e.preventDefault();
    if (commentScore === 0) {
      return;
    } else {
      setCommentScore(commentScore - 1);
    }
  };

  const handleVote = (e) => {
    e.preventDefault();
    setCommentScore(commentScore + 1);
  };
  return (
    <>
      <div className="bg-color-white p-4 rounded-[10px] flex flex-col my-4 relative">
        <div
          className={`${
            !activeUser() ? "w-4/5 lg:w-[40%]" : "w-full lg:w-[45%]"
          } flex flex-row justify-between items-center mb-2 lg:ml-[50px]`}
        >
          <img
            src={profilePic}
            alt="profile_user_image"
            className="w-10 h-auto"
          />
          <a href="#" className="font-bold">
            {userName}
          </a>
          <span
            className={`bg-Moderate-blue py-[2px] px-[6px] text-[14px] font-bold text-white rounded ${
              !activeUser() ? "hidden" : null
            }`}
          >
            you
          </span>
          <span className="txt-Grayish-Blue">{createdAt}</span>
        </div>
        <p className="my-2 txt-Grayish-Blue lg:ml-[50px]">{content}</p>
        <div className="bg-Very-light-gray p-[5px] w-[30%] txt-Moderate-blue font-bold flex flex-row justify-between rounded-[8px] text-[18px] lg:flex-col lg:w-[40px] lg:absolute lg:justify-center">
          <button
            className="w-1/4 lg:text-center lg:w-full"
            onClick={handleVote}
          >
            +
          </button>
          <input
            type="text"
            name=""
            id=""
            value={commentScore}
            className="w-1/4 bg-transparent lg:text-center lg:w-full outline-none"
            readOnly
          />
          <button
            className="w-1/4 lg:text-center lg:w-full"
            onClick={handleUnVote}
          >
            -
          </button>
        </div>
        <div className=" absolute bottom-[20px] right-[20px] lg:top-[25px]">
          {!activeUser() ? (
            <div className="flex flex-row justify-between items-center w-[70px]">
              <img src="/images/icon-reply.svg" alt="" />
              <span className="txt-Moderate-blue font-bold">Reply</span>
            </div>
          ) : (
            <div className="flex flex-row justify-between items-center w-[140px]">
              <div className="flex flex-row justify-around w-1/2 items-center mx-2">
                <img src="/images/icon-delete.svg" alt="" />
                <span className="font-bold txt-Soft-Red">Delete</span>
              </div>
              <div className="flex flex-row justify-around w-1/2 items-center mx-2">
                <img src="/images/icon-edit.svg" alt="" />
                <span className="font-bold txt-Moderate-blue">Edit</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {replies.length > 0 && (
        <Replies replies={replies} currentUser={currentUser} />
      )}
    </>
  );
};

export default Comment;
