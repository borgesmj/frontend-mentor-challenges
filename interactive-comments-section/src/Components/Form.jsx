import React, { useState } from "react";

const Form = ({
  profilePic,
  createComment,
  currentUser
}) => {
    const [commentText, setCommentText] = useState('')

    const getDate = () => {
        return (new Date()).toString()
    }

    const getId = () => {
        const numero = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36).substring(2)

        return numero + fecha
    }
  const handleNewComment = (e) => {
    e.preventDefault()
    if (commentText.length > 0){
      const newComment = {
        id: 5,
        "content": commentText,
        "createAt": "now",
        "score": 0,
        "user": {
            "image": {
                "png": currentUser?.image.png,
                "webp": currentUser?.image.webp,
            },
            "username": currentUser?.username
        },
        "replies": []
    }
    console.log(newComment)
    createComment(newComment)
    setCommentText('')
    } else {
      return
    }
  };
  return (
    <form
      className="bg-color-white rounded-[10px] p-4 flex flex-wrap justify-between"
      onSubmit={handleNewComment}
    >
      <textarea
        name=""
        id=""
        cols="30"
        rows="3"
        className="w-full rounded-[10px] px-6 py-4 border-solid border-[2px] border-Light-gray mb-6 lg:cursor-pointer"
        placeholder="Add a comment.."
        onChange={(e) => {setCommentText(e.target.value)}}
        value={(commentText)}
      ></textarea>
      <img src={profilePic} alt="" className="h-8 w-auto mt-[15px]" />
      <input
        type="submit"
        value="SEND"
        className={`font-medium bg-[#5457b6] text-white py-4 px-8 rounded-[10px] ${commentText.length > 0 ? "lg:bg-[#5457b6] hover:cursor-pointer lg:shadow-xl" : 'lg:bg-[#c3c4ef] hover:cursor-not-allowed'}`}
      />
    </form>
  );
};

export default Form;
