import React from "react"

export default function MemoItem({ children }) {
  return (
    <div>
      <div
        onClick={() => {
          console.log("clicked")
          console.log(children) // memo2 클릭 시 memo2 출력 -> memo.title을 전달하니깐
        }}
      >
        {children}
      </div>
    </div>
  )
}
