import React from "react"
import TextInput from "./TextInput"

export default function TextInput2({ valuee, setValue }) {
  return (
    <input
      type="text"
      placeholder="입력하시오."
      value={valuee}
      onChange={(e) => {
        setValue(e.target.value)
      }}
    />
  )
}
