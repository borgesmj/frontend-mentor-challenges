import { useEffect, useState } from "react";
import Comments from "./Components/Comments";

function App() {
  return (
    <main className="w-full py-8 px-4 md:w-3/4 md:my-0 md:mx-auto lg:w-3/5 xl:1/2">
      <Comments />
    </main>
  );
}

export default App;
