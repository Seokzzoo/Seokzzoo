import React from "react"

export default function Select2({ value, setValue, options }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
    >
      <option value="" disabled>
        지역을 선택해주세요.
      </option>
      {/* <option value="서울" disabled>
        서울
      </option> */}
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {" "}
            {option}{" "}
          </option>
        )
      })}
    </select>
  )
}
