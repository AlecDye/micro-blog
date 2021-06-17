import { useState } from "react"
import Navbar from "./components/Navbar"
import BlogList from "./components/blog/BlogList"

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      author: "Alec",
      title: "The future is bright",
      preview: "There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to...",
      content: "There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?",
      date: "6/17/21",
      tags: ["space", "tech", "life"],
      id: 1
    },
    {
      author: "Conner",
      title: "Go where no one has gone...",
      preview: "We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because...",
      content: "We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
      date: "6/18/21",
      tags: ["space", "tech", "earth"],
      id: 2
    },
    {
      author: "Alec",
      title: "Greatness from within",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "6/19/21",
      tags: ["writing", "art"],
      id: 3
    }
  ])

  
  return (
    <div className="container">
      <Navbar />
      <BlogList blogs={blogs}/>
    </div>
  );
}

export default App;
