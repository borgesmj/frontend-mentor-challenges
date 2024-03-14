import React, { useState } from "react";

const Reply = ({
  userName,
  currentUser,
  content,
  score,
  createdAt,
  profilePic,
}) => {
  const [replyScore, setReplyScore] = useState(score);

  const activeUser = () => {
    if (userName === currentUser) return true;
  };

  const handleVote = () => {
    setReplyScore(replyScore + 1);
  };

  const handleUnVote = () => {
    if (replyScore > 0) {
      setReplyScore(replyScore - 1);
    } else {
      return;
    }
  };
  return (
    <div className="bg-color-white p-4 rounded-[10px] flex flex-col my-4 relative">
      <div
        className={`${
          !activeUser() ? "w-full lg:w-[45%]" : "w-full lg:w-[52%]"
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
        <button className="w-1/4 lg:text-center lg:w-full" onClick={handleVote}>
          +
        </button>
        <input
          type="text"
          name=""
          id=""
          value={replyScore}
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
  );
};

export default Reply;
