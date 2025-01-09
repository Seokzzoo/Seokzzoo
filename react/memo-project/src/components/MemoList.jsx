import React from "react"
import MemoItem from "./MemoItem"

export default function MemoList({ memos }) {
  return (
    // 이 구조를 잘 외우자..
    <div>
      {memos.map((memo) => (
        <MemoItem>{memo.title}</MemoItem>
      ))}
    </div>
  )
}
