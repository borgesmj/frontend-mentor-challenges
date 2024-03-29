import React from "react";
import Reply from "./Reply";

const Replies = ({ replies, currentUser }) => {
  // console.log(replies);
  return (
    <div className="border-l-solid border-l-[2px] border-Light-gray pl-10 ml-3 lg:ml-8">
      {replies.map((item, index) => (
        <Reply
          activeUser={false}
          key={`reply_${index}`}
          userName={item.user.username}
          currentUser={currentUser}
          content = {item.content}
          score = {item.score}
          createdAt = {item.createdAt}
          profilePic = {item.user.image.webp}
        />
      ))}
    </div>
  );
};

export default Replies;
