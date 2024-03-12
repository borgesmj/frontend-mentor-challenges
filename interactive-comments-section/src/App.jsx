import { useEffect, useState } from "react";
import Comment from "./Components/Comment";
import { initialComments } from "./InitialComments";
import Form from "./Components/Form";

function App() {
  const [comments, setComments] = useState([]);
  const [activeUser, setActiveUser] = useState({})

  useEffect(() => {
    const obtenerLS = JSON.parse(localStorage.getItem("comments"));
    const obtenerUser = JSON.parse(localStorage.getItem("currentUser"));

    if (obtenerLS) {
      setComments(obtenerLS);
    } else {
      localStorage.setItem(
        "comments",
        JSON.stringify(initialComments.comments)
      );
    }

    if (obtenerUser){
      setActiveUser(obtenerUser)
    } else {
      localStorage.setItem(
        'currentUser',
        JSON.stringify(initialComments.currentUser)
      )
    }
  }, []);

  return (
    <main className="bg-[#f5f6fa] w-dvw p-4">
      {comments.map((item, index) => (
        <Comment
          key={`comment_${index}`}
          content={item.content}
          profilePic={item.user.image.webp}
          username={item.user.username}
          score = {item.score}
          createdAt = {item.createdAt}
          replies = {item.replies}
          activeUser = {activeUser.username}
        />
      ))}
      <Form activeUser = {activeUser}/>
    </main>
  );
}

export default App;
