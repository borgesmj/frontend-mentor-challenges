import React from "react";
import Comment from "./Comment";
// Comments section

const Comments = ({ currentUser, usersComments }) => {
  return (
    <section>
      {usersComments.map((item, index) => (
        <Comment
          key={`comment_${index}`}
          content={item.content}
          profilePic={item.user.image.webp}
          userName = {item.user.username}
          createdAt = {item.createdAt}
          replies = {item.replies}
          currentUser = {currentUser}
          score = {item.score}
        />
      ))}
    </section>
  );
};

export default Comments;
