import { useEffect, useState } from "react";
import Comments from "./Components/Comments";
import Form from "./Components/Form";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [usersComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    const obtenerLS = JSON.parse(localStorage.getItem("commentsData"));

    if (obtenerLS) {
      setUserComments(obtenerLS.comments);
      setCurrentUser(obtenerLS.currentUser);
    } else {
      const initialData = {
        currentUser: {
          image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
        comments: [
          {
            id: 1,
            content:
              "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            createdAt: "1 month ago",
            score: 12,
            user: {
              image: {
                png: "./images/avatars/image-amyrobson.png",
                webp: "./images/avatars/image-amyrobson.webp",
              },
              username: "amyrobson",
            },
            replies: [],
          },
          {
            id: 2,
            content:
              "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            createdAt: "2 weeks ago",
            score: 5,
            user: {
              image: {
                png: "./images/avatars/image-maxblagun.png",
                webp: "./images/avatars/image-maxblagun.webp",
              },
              username: "maxblagun",
            },
            replies: [
              {
                id: 3,
                content:
                  "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                createdAt: "1 week ago",
                score: 4,
                replyingTo: "maxblagun",
                user: {
                  image: {
                    png: "./images/avatars/image-ramsesmiron.png",
                    webp: "./images/avatars/image-ramsesmiron.webp",
                  },
                  username: "ramsesmiron",
                },
              },
              {
                id: 4,
                content:
                  "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                createdAt: "2 days ago",
                score: 2,
                replyingTo: "ramsesmiron",
                user: {
                  image: {
                    png: "./images/avatars/image-juliusomo.png",
                    webp: "./images/avatars/image-juliusomo.webp",
                  },
                  username: "juliusomo",
                },
              },
            ],
          },
        ],
      };

      localStorage.setItem("commentsData", JSON.stringify(initialData));
      setUserComments(initialData?.comments);
      setCurrentUser(initialData?.currentUser);
    }
  }, []);

  const createComment = (comment) => {
    setUserComments(prevComments => [...prevComments, comment]);
  };
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
        currentUser = {currentUser}
        newComment = {newComment}
      />
    </main>
  );
}

export default App;
