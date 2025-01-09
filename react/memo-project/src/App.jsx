import { useState } from "react"
import MemoContainer from "./components/MemoContainer"
import SideBar from "./components/SideBar"
import "./App.css"

function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo1",
      content: "content1",
      createdAt: 1736424827757, // 시간 값
      updatedAt: 1736424827757, // 시간 값
    },
    {
      title: "memo2",
      content: "content2",
      createdAt: 1736424827757, // 시간 값
      updatedAt: 1736424827757, // 시간 값
    },
    {
      title: "memo3",
      content: "content3",
      createdAt: 1736424827757, // 시간 값
      updatedAt: 1736424827757, // 시간 값
    },
  ])

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0)

  const setMemo = (newMemo) => {
    const newMemos = [...memos]
    newMemos[selectedMemoIndex] = newMemo
    // memos[selectedMemoIndex] = newMemo // 불변성의 문제... => 라이프사이클을 훼손한다!
    // setMemos(memos) // memos가 리스트라 발생하는 reference 문제!
    setMemos(newMemos)
    console.log(memos[selectedMemoIndex].title)
  }

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  )
}

export default App
