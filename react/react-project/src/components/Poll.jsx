import React from 'react'
import Select2 from './Select2'
import TextInput2 from './TextInput2';
import '@/css/Poll.css';


const contryOptions = [
  '한국',
  '중국',
  '일본',
  '러시아',
  '미국'
];

export default function Poll() {
  return (
    <div className="App">
      <div className="form">
        <div className="form-item">
          <h1>1. 이름이 무엇인가요?</h1>
          <TextInput2 />
        </div>
        <div className="form-item">
          <h1>2. 사는 곳은 어딘가요?</h1>
          <Select2 />
        </div>
        <div className="form-item">
          <h1>2-1. 한국 어디에 사나요?</h1>
          <TextInput2 />
        </div>
        <div className="button-group">
          <button>저장</button>
        </div>
      </div>
    </div>
  )
}
