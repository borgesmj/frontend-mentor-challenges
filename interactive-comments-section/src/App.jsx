import { useEffect, useState } from "react";
import Comments from "./Components/Comments";
import Form from "./Components/Form";

const  App = () =>  {
  const [currentUser, setCurrentUser] = useState({});
  const [usersComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    const getComments = () => JSON.parse(localStorage.getItem("comments"));
    const getActiveUser = () => JSON.parse(localStorage.getItem("activeUser"));

    const commentsLS = getComments();
    const activeUserLS = getActiveUser();

    if (commentsLS?.length > 0 && Object.keys(activeUserLS).length > 0) {
      setUserComments(commentsLS);
      setCurrentUser(activeUserLS);
    } else {
      fetchCommentsData();
    }
  }, []);

  const createComment = (comment) => {
    setUserComments((prevComments) => [...prevComments, comment]);
    localStorage.setItem('comments', JSON.stringify(usersComments))
  };

  const fetchCommentsData = async () => {
    try {
      const response = await fetch("./data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch comments data");
      }
      const data = await response.json();
      setCurrentUser(data.currentUser);
      setUserComments(data.comments);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(usersComments));
  }, [usersComments]);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <main className="w-full py-8 px-4 md:w-3/4 md:my-0 md:mx-auto lg:w-1/2">
      <Comments
        currentUser={currentUser.username}
        usersComments={usersComments}
      />
      <Form
        profilePic={currentUser?.image?.webp}
        createComment={createComment}
        setNewComment={setNewComment}
        currentUser={currentUser}
        newComment={newComment}
      />
    </main>
  );
}

export default App;
