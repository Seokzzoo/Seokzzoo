import React from "react"
import { useState } from "react"
import Select2 from "./Select2"
import TextInput2 from "./TextInput2"
import "@/css/Poll.css"

const countryOptions = ["한국", "중국", "일본", "러시아", "미국"]

export default function Poll() {
  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    address: "",
  })

  console.log(formValue)

  return (
    <div className="App">
      <div className="form">
        <div className="form-item">
          <h1>1. 이름이 무엇인가요?</h1>
          <TextInput2
            valuee={formValue.name}
            setValue={(value) => {
              // setFormValue({
              //   name: value,
              //   country: formValue.country,
              //   address: formValue.address,
              // }
              // 스프레드 문법
              // setFormValue({
              //   ...formValue,
              //   name: value,
              // })
              // 함수 사용 가능!
              setFormValue((state) => ({
                ...state,
                name: value,
              }))
            }}
          />
        </div>
        <div className="form-item">
          <h1>2. 사는 곳은 어딘가요?</h1>
          <Select2
            value={formValue.country}
            setValue={(value) => {
              setFormValue((state) => ({
                ...state,
                country: value,
              }))
            }}
            options={countryOptions}
          />
        </div>
        {formValue.country === "한국" && (
          <div className="form-item">
            <h1>2-1. 한국 어디에 사나요?</h1>
            <TextInput2
              valuee={formValue.address}
              setValue={(value) => {
                setFormValue((state) => ({
                  ...state,
                  address: value,
                }))
              }}
            />
          </div>
        )}

        <div className="button-group">
          <button
            onClick={() => {
              alert("저장되었습니다!")
              setFormValue({
                name: "",
                country: "",
                address: "",
              })
            }}
            disabled={!formValue.name || !formValue.country}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  )
}
