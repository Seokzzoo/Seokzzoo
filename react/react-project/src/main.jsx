// import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import Practice from "./Practice.jsx"
import CourseCard from "./components/CourseCard"
import Counter from "./components/Counter"

createRoot(document.getElementById("root")).render(
  // JSX 내부 주석은 {/* ... */} 형태로 작성
  // <StrictMode>
  <>
    <App />
    {/* <Practice /> */}
    {/* <CourseCard /> */}
    {/* <Counter /> */}
    {/* <div>aa</div> */}
  </>
  // </StrictMode>
)
