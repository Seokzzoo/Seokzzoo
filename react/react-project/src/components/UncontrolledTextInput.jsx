import { useRef } from 'react';

export default function UncontrolledTextInput() {
  const inputRef = useRef();

  console.log('[UncontrolledTextInput] render');

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Get value
      </button>
    </>
  );
}

