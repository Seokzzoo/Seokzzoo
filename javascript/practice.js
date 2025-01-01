// number
// const number = 20
// console.log(typeof number)

// bigint
// const bigNumber = 123123123123123123123n
// console.log(typeof bigNumber)

// string
// const str1 = "Hello"
// const str2 = "Hello"
// console.log(str1, str2) // 둘의 기능상 차이는 없다

// boolean
// const isTrue = false
// const result = 10 < 20
// console.log(typeof isTrue)
// console.log(typeof result)

// null -> 값이 없음(존재하지 않음)
// const isThere = null

// undefined -> 선언은 되었으나 값이 아직 할당되지 않았음을 나타낸다
// const username = undefined

// symbol -> 객체의 고유한 식별자를 만들기 위해 사용
// const id = Symbol("id")
// console.log(typeof id)

// array
// const arrN = [1, 2, 3]
// const arrS = ["Hello", "World"]
// console.log(arrN)
// console.log(arrS)

// object -> 속성 값에 접근하기 위해서는 .attribute 또는 ['attribute'] 표기법을 사용한다
// const user = {
//   id: "abc",
//   password: 123123,
// }
// console.log(user)

// set -> 중복을 허용하지 않음, ES6 이후 도입
// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// console.log(set)

// set의 특징을 활용해 배열 arr의 중복을 제거
// const arr = [1, 2, 3, 1, 2, 3]
// const newArr = new Set(arr)
// console.log(newArr)

// map -> ES6 이후 도입, 객체와 동일한 콘셉이지만 차이점이 있다.
// 키 값으로 모든 데이터 타입 허용, 삽입된 순서대로 정렬됨, map.size로 크기를 바로 알 수 있음, 맵 자체로 순회할 수 있음
// const map = new Map()
// map.set("Hello", "World!")
// map.set(123, 456)
// console.log(map)

// 산술 연산자
// console.log(1 + 2)
// console.log(3 - 1)
// console.log(3 * 2)
// console.log(6 / 2)
// console.log(2 + "살")

// 증감 연산자
// let number = 10
// number++
// console.log(number)
// number--
// console.log(number)

// 비교 연산자
// const a = 10
// const b = 20
// console.log(a < b)
// console.log(a > b)
// console.log(a === b)
// console.log(a !== b)

// 논리 연산자
// const a = 2 < 3
// const b = 10 > 20
// console.log(a && b)
// console.log(a || b)
// console.log(!a)

// 삼항 연산자
// const result = 2 < 3 ? "Hello" : "World!"
// console.log(result)

// nullish -> 여러 개의 피연산자 중 값이 확정되어 있는 피연산자(변수)를 찾는 연산을 수행
// const a = undefined
// const b = null
// const c = "Hello"
// console.log(a ?? b ?? c)

// 비트 연산자 -> 사용할 일이 거의 없음^^, 존재한다는 것만 알아두자!

// 대입 연산자
// let number = 10
// number += 2
// console.log(number)

// 전개 구문(spread syntax)
// const hello = "Hello"
// const world = "World"
// console.log(...hello, ...world) // H e l l o W o r l d
// const arr = [10, 20]
// function sum(a, b) {
//   return a + b
// }
// console.log(sum(...arr))
// console.log(sum(100, 200))

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const newArr = [...arr1, ...arr2]
// console.log(typeof newArr) //  object -> array => array, object 둘 다 object 자료형에 속함!
// console.log(typeof arr1) // object -> array
// console.log(newArr)

// if
// const a = 10
// const b = 20
// if (a < b) {
//   console.log("yes")
// }

// else
// const a = 10
// const b = 20
// if (a < b) {
//   console.log("yes")
// } else {
//   console.log("no")
// }

// else if
// const a = 10
// const b = 20
// const c = 30

// if (a > b) {
//   console.log("a가 b보다 큼")
// } else if (b === c) {
//   console.log("b랑 c랑 같네?")
// } else {
//   console.log("쩦")
// }

// switch
// const number = 10
// switch (number) {
//   case 3:
//     console.log('3')
//     break
//   case 10:
//     console.log('10')
//     break
//   default: // else와 비슷슷
//     console.log('쩦')
// }

// if문과 switch문 비교
// 어떤 수가 홀수인지, 짝수인지 판별하는 코드
// if문
// const number = 10
// if (number % 2 === 0) {
//   console.log("even")
// } else {
//   console.log("odd")
// }

// switch (number % 2) {
//   case 0:
//     console.log("even")
//     break
//   case 1:
//     console.log("odd")
//     break
// }

// for
// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// break
// for (let i = 1; i < 11; i++) {
//   if (i === 6) {
//     break
//   }
//   console.log(i)
// }

// continue
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue
//   } else {
//     console.log(i)
//   }
// }

// for of -> 반복 가능한 객체(배열, 문자열 등)에 사용할 수 있는 반복문으로 주어진 객체를 차례대로 순회한다!
// const arr = [1, 2, 3]
// for (const ar of arr) {
//   console.log(ar)
// }

// while
// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++
// }

// do while
// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i < 10)

// 주어진 단수 n에 대한 구구단 n단을 출력하는 for문을 작성한다!
// const n = 4
// for (let i = 1; i < 10; i++) {
//   tmp = `${n} * ${i} = ${n * i}`
//   console.log(tmp)
// }
