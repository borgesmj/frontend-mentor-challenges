import React from "react";
import Comment from "./Comment";
// Comments section

const Comments = ({ currentUser, usersComments, openModal }) => {
  return (
    <section>
      {usersComments.map((item, index) => (
        <Comment
          key={`comment_${index}`}
          comment={item}
          currentUser={currentUser}
          openModal = {openModal}
          id = {item.id}
        />
      ))}
    </section>
  );
};

export default Comments;
