import React from "react";
import Reply from "./Reply";

const Replies = ({ replies, currentUser }) => {
  // console.log(replies);
  return (
    <div className="border-l-solid border-l-[2px] border-black pl-10 ml-3">
      {replies.map((item, index) => (
        <Reply
          activeUser={false}
          key={`reply_${index}`}
          userName={item.user.username}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
};

export default Replies;
