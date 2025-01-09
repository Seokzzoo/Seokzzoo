import React from 'react'
import { useState, useCallback } from 'react'
// import kcwImage from '@/assets/kcw.jpg';

// 컴포넌트 외부에 함수 선언
function handleClick2(e) {
  console.log("click2", e);
}

export default function AddEvent() {
    const [value, setValue] = useState('')
    const [isOpened, setIsOpened] = useState(true)

    const openFunc = () => {
      setIsOpened(!isOpened)
    }

  /**
   * ℹ️합성 이벤트 (SyntheticEvent)
   * - React에서 이벤트가 발생할 때, 이벤트 핸들러의 인자로 합성 이벤트 객체가 전달됨
   * - 이 합성 이벤트는 javascript 에서 전달 받는 이벤트 객체를 확장(래핑)한 객체임
   *   (거의 동일한 인터페이스를 가지고 있음)
   * - 원본 이벤트 객체(native event)는 syntheticEvent.nativeEvent 에 있음
   * - 지금은 그냥 같은 이벤트 객체라고 생각해도 무방
   */
  function handleClick1(e) {
    console.log("click1", e);
  }

  /**
   * ℹ️이벤트 핸들러(함수)를 만들 때는 react lifecycle을 고려하자!
   *  - 컴포넌트가 리랜더링 되면 컴포넌트 내에서 단순 정의한 함수가 새로운 함수로 만들어짐
   *  - 이것은 불필요한 작업으로 성능 문제를 야기함
   *  - 그래서 함수의 정의를 최대한 컴포넌트 밖으로 빼거나,
   *    useCallback으로 감싸줘서 매 랜더링 마다 새로 만들어지지 않도록 해줄 필요가 있음
   */
  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleClick1}>Button1</button>
        <button onClick={handleClick2}>Button2</button>
        <div>
          <input type="text" onChange={handleChange} />
          <div>{ value }</div>
        </div>
      </div>
      <div>
        <button onMouseEnter={openFunc}>check</button>
        {/* Vite는 기본적으로 정적 파일을 처리할 때 import 방식이나 public 디렉토리를 선호합니다. */}
        {isOpened && <div><img src="/assets/kcw.jpg" alt="kcw" width={100}></img></div>} 
      </div>
    </div>
  );
}