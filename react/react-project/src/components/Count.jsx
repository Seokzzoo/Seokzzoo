// import React, { Component, useState } from 'react';

// class Count extends Component {
//   const [count, setCount] = useState(0) // state -> 현재 상태를 읽는 변수, setCount -> 상태를 업데이트하고, React에 상태가 변경되었음을 알리는 함수

//   const increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   render() {
//     return (
//       <div>
// <p>Current Count : { count }</p>
// <button onClick={increment}>increment</button>
// <button onClick={decrement}>decrement</button>
//       </div>
//     );
//   }
// }

// export default Count;

import React from "react"
import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0) // state -> 현재 상태를 읽는 변수, setCount -> 상태를 업데이트하고, React에 상태가 변경되었음을 알리는 함수
  // const [value, setValue] = useState(0) -> 얘도 가능함!

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <p>Current Count : {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}
