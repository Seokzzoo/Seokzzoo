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

// 함수 -> 하나의 동작을 위한 코드 집합을 의미하며, 반복적인 동작을 처리하기 위해 작성한다!
// function sum(a, b) {
//   console.log(a + b)
// }
// sum(10, 20)

// 함수와 변수 -> 함수 내부에서 선언된 변수는 지역 변수(Local Variable)로 유효 범위가 함수 내부이다!
// function a() {
//   const b = 10
//   console.log(b)
// }
// a()
// console.log(b) // b is not defined

// 함수와 인자 -> 지정된 인자의 개수보다 많은 인자를 전달하거나, 부족하게 전달한다면?
// function sum(a, b) {
//   console.log(a + b)
// }
// sum(10) // sum(10, undefined), NaN(Not a Number) 출력력
// sum(10, 20, 30) // 오류 발생 안 함, 30 출력

// 인자의 기본 값
// function sum(a, b = 20) {
//   console.log(a + b)
// }
// sum(10)

// 나머지 인자
// function something(a, b, ...rest) {
//   console.log(a)
//   console.log(b)
//   console.log(rest) // array로 반환환
// }
// something(1, 2, 3, 4, 5)

// 함수의 반환 값 -> return
// function sum(a, b) {
//   return a + b
// }
// console.log(sum(10, 20))

// 함수 표현식 -> 변수를 선언하듯 함수를 선언
// const sum = function (a, b) {
//   return a + b
// }
// const tmp = sum(10, 20)
// console.log(tmp)

// 화살표 함수
// const sum = (a, b) => a + b
// const tmp = sum(10, 20)
// console.log(tmp)

// toUpperCase() -> 문자열 대문자로 변환
// const str = "hello world!"
// console.log(str.toUpperCase())

// toLowerCase() -> 문자열 소문자로 변환
// const str = "HELLO WORLD!"
// console.log(str.toLowerCase())

// trim() -> 공백 제거
// const str = "   hihi  "
// console.log(str.trim())

// trimStart(), trimEnd()
// const str = "   hihi   "
// console.log(str.trimStart())
// console.log(str.trimEnd())

// trimLeft(), trimRight()
// const str = "   hihi   "
// console.log(str.trimLeft())
// console.log(str.trimRight())

// 사용자에게 문자열을 입력받은 뒤, 앞뒤 공백을 제거하고 대문자로 변환한 값을 반환하는 함수 convert()를 작성한다.
// 이 때 사용자의 입력은 prompt()를 사용한다
// const convert = (str) => {
//   // const str = prompt() // node.js 환경에서는 작동되지 않음!
//   return str.trim().toUpperCase()
// }
// console.log(convert("  hello "))

// repeat() -> 문자열을 주어진 횟수만큼 반복해 이어붙인 새로운 문자열 반환
// const str = "Hello"
// console.log(str.repeat(3))
// console.log(str)

// padStart(), padEnd() -> 문자열의 시작 위치 또는 끝나는 부분부터 주어진 문자열을 추가해서 지정한 길이를 만족하는 새로운 문자열을 반환
// const str = "Hello"
// console.log(str.padStart(10, "v")) // vvvvvHello
// console.log(str.padEnd(10, "v")) // Hellovvvvv

// indexOf -> 주어진 키워드 값을 문자열에서 검색하여, 일치하는 첫번째 인덱스를 반환
// const str = "Hello. My name is Seokzzoo"
// console.log(str.indexOf("Hello"))
// console.log(str.indexOf("Seok"))

// includes() -> 주어진 키워드 값을 문자열에서 검색하여, 일치하는 경우 true를 반환
// const str = "Hello. My name is Seokzzoo"
// console.log(str.includes("Hello"))
// console.log(str.includes("My"))
// console.log(str.includes("seok"))

// startsWith(), endsWith() -> 해당 문자열이 주어진 문자열로 시작하는지, 끝나는지 여부를 true or false로 반환
// const str = "Hello. My name is Seokzzoo"
// console.log(str.startsWith("Hello"))
// console.log(str.endsWith("zzoo"))

// 사용자에게 문자열을 입력받은 뒤, 해당 문자열이 str에 포함되는지를 알려주는 함수 search()를 작성하시오
// const str1 = "Hello World!"
// const search = () => {
//   const str = "Hello"
//   return str1.includes(str)
// }
// console.log(search())

// replace() -> 주어진 패턴과 일치하는 첫 번째 부분을, 주어진 문자열로 교체한 새로운 문자열을 반환
// const str = "What are you doing now?"
// console.log(str.replace("you", "we"))

//replaceAll() -> 주어진 패턴과 일치하는 모든 부분을, 주어진 문자열로 교체한 새로운 문자열을 반환
// const str = "hello hi wow hi hello hi"
// console.log(str.replaceAll("hi", "bye"))

// substring() -> 문자열의 주어진 시작 인덱스로부터 주어진 종료 인덱스의 이전 인덱스 까지를 새로운 부분 문자열로 반환
// const str = "Hello World!"
// console.log(str.substring(0, 5))
// console.log(str.substring(6, 12))

// slice() -> 주어진 인자에 따라 문자열의 일부를 추출해 새로운 문자열로 반환
// const str = "Hello World"
// console.log(str.slice(5))
// console.log(str.slice(2, 7))
// console.log(str.slice(-3))
// console.log(str.slice(-5, -3))

// split() -> 문자열을 주어진 구분자(Delimiter)를 기준으로 자른 뒤, 그 결과를 배열로 반환
// const str = "What are you doing now?"
// console.log(str.split(" "))

// Array.isArray() -> 주어진 인자가 배열인지를 판별하는 함수
// const arr = ["Hello", "World!"]
// const str = "Hello World!"
// const number = 123
// console.log(Array.isArray(arr))
// console.log(Array.isArray(str))
// console.log(Array.isArray(number))

// Array.from() -> 새로운 배열 객체를 반환환
// const arr = [1, 2, 3, 4, 5]
// const newArr = Array.from(arr)
// console.log(arr)
// console.log(newArr)
// const arr = [1, 2, 3, 4, 5]
// function plusTwo(number) {
//   return number + 2
// }
// const newArr = Array.from(arr, plusTwo)
// console.log(arr)
// console.log(newArr)

// Array.of()
// const arr = Array(1)
// const ofArr = Array.of(1)
// console.log(arr)
// console.log(ofArr)

// push(), pop()
// push() -> 배열에 끝에 하나 이상의 요소를 추가하고, 변경된 배열의 길이를 반환
// pop() -. 배열의 끝에서 하나의 요소를 제거하고, 해당 요소를 반환
// const arr = [1, 2, 3, 4, 5]
// console.log(arr)
// arr.push(6, 7, 8)
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr)

// unshift(), shift()
// unshift() -> 배열의 앞쪽에 하나 이상의 요소를 추가하고, 변경된 배열의 길이를 반환한다.
// shift() -> 배열의 앞쪽에 하나 이상의 요소를 추가하고, 변경된 배열의 길이를 반환한다.
// const arr = [1, 2, 3, 4, 5]
// arr.unshift(6, 7, 8)
// console.log(arr)
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr)

// forEach() -> 주어진 함수를 배열 요소 각각에 실행하는 메서드, 원본 배열의 값을 변경하거나, 값을 리턴하지 않는다!
// const arr = [1, 2, 3]
// arr.forEach((number) => {
//   number *= 2
//   console.log(number)
// })

// includes() -> 배열이 주어진 요소를 포함하는지 여부에 따라 true or false를 반환
// const arr = ["hello", "world"]
// console.log(arr.includes("hello"))
// console.log(arr.includes("Hello"))

// find() -> 주어진 판별 함수(Testing Function)을 만족하는 첫 번째 요소의 값을 반환한다.
// const arr = ["hello", "world", "hi", "friend"]
// const key = arr.find((value) => value.length < 3)
// console.log(key)

// findIndex() -> 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환, 만족하는 요소가 없다면 -1을 반환
// const arr = [1, 2, 3, 4, 5]
// const key = arr.findIndex((number) => number > 3)
// console.log(key)

// sort()
// const numbers = [3, 1, 4, 5, 2]
// numbers.sort() // 오름차순
// numbers.sort((a, b) => b - a) // 내림차순순
// console.log(numbers)
// const fruits = ["banana", "apple", "cherry", "date"]
// fruits.sort() // 오름차순
// fruits.sort((a, b) => b.localeCompare(a)) // 내림차순
// console.log(fruits)

// fill() -> 배열을 지정한 값으로 채우며, 원본 배열을 수정함, (채울 값, 시작 인덱스, 끝 인덱스)
// const arr = [1, 2, 3, 4, 5]
// arr.fill(10)
// console.log(arr)
// arr.fill(10, 3)
// console.log(arr) // [ 1, 2, 3, 10, 10 ]
// arr.fill(10, 1, 3)
// console.log(arr) // [ 1, 10, 10, 4, 5 ]

// slice() -> 배열의 복사본을 조각 내 새로운 배열로 반환하며, 선택적으로 시작 인덱스와 종료 인덱스를 가질 수 있음
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(1)) // [ 2, 3, 4, 5 ]
// console.log(arr.slice(1, 3)) // [ 2, 3 ]

// splice() -> 필수 인자로 시작 인덱스가 요구되며, 선택 인자로 배열에서 제거할 요소의 개수와 배열에 추가할 요소들을 가질 수 있음
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(2)) // [ 3, 4, 5 ]
// console.log(arr) // [ 1, 2 ]
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(2, 2)) // [ 3, 4 ]
// console.log(arr) // [1, 2, 5]
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.splice(2, 0, 10)) // []
// console.log(arr) // [ 1, 2, 10, 3, 4, 5 ]

// join() -> 배열의 모든 요소를 이어붙여 하나의 문자열로 반환하며, 선택적으로 각각의 요소를 구분할 문자를 인자로 가질 수 있다.
// 생략할 경우 기본 구분자는 , 쉼표가 된다
// const arr = ["hello", "world", "hi"]
// console.log(arr.join()) // hello,world,hi
// console.log(arr.join("/")) // hello/world/hi

// concat() -> 인자로 주어진 배열 (또는 값들)을 기존 배열에 합쳐 새로운 배열로 반환
// const arr = ["hello", "world", "hi"]
// const addArr = ["123", "456"]
// console.log(arr.concat(addArr)) // [ 'hello', 'world', 'hi', '123', '456' ]
// console.log("dohae", "lee") // dohae lee

// map() -> 배열의 모든 요소에 각각 주어진 함수를 실행한 뒤 그 결과들을 모아 새로운 배열로 반환하며, 필수 인자로 콜백 함수가 요구됨
// const arr = [1, 2, 3, 4, 5]
// const newArr = arr.map((value) => {
//   return value * 5
// })
// console.log(newArr)

// map()을 사용해 주어진 배열의 모든 요소에 제곱 근을 새로운 배열 sqrt로 만들고, 해당 배열을 출력하시오
// const arr = [4, 9, 16]
// const sqrt = arr.map((value) => {
//   return Math.sqrt(value)
// })
// console.log(sqrt)

// filter() -> 주어진 판별 함수의 결괏값이 참인 요소들만을 모아 새로운 배열로 반환
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const newArr = arr.filter((value) => {
//   return value > 3
// })
// console.log(newArr)

// reduce() -> 필수 인자로 리듀서(reducer) 함수를, 선택인자로 리듀서 함수에 제공할 초깃값을 가질 수 있으며
// 배열의 각 요소에 대해 주어진 리듀서 함수를 실행한 뒤 하나의 값을 반환
// 리듀서 함수는 필수 인자로 누산기와 현재 값을 가지며, 선택 인자로 현재 요소의 인덱스와 reduce()를 호출한 원본 배열을 가질 수 있음
// const arr = [1, 2, 3, 4, 5]
// const reducer = (acc, value) => acc + value
// console.log(arr.reduce(reducer)) // 15
// console.log(
//   arr.reduce((acc, value) => {
//     return acc * value
//   }, 1)
// ) // 120

// reduce()를 사용해 주어진 객체 배열 내에 point 항목의 값들을 합산하고, 그 결과를 출력하는 코드를 작성한다
// const users = [
//   {
//     name: "John",
//     point: 35,
//   },
//   {
//     name: "Jane",
//     point: 40,
//   },
//   {
//     name: "Jack",
//     point: 100,
//   },
// ]

// console.log(users.reduce((acc, val) => acc + val.point, 0))

// 프로퍼티 축약 표현 -> 객체에 프로퍼티 값을 할당할 때, 각 변수 이름과 똑같은 키 값을 사용한다면 아래와 같이 표현 가능!
// const name = "John"
// const age = 20
// const obj = {
//   name,
//   age,
// }
// console.log(obj)

// 메서드 축약 표현 -> 객체의 프로퍼티로 선언된 함수를 메서드라고 한다, 객체 내뷍 메서드 작성 시 function 키워드 생략하고 축약하여 작성 가능하다!
// const obj = {
//   greeting() {
//     console.log("Hello")
//   },
// }
// obj.greeting()

// 사용자의 이름, 나이, 직업 그리고 호출하면 사용자의 이름을 출력해주는 메서드를 가지고 있는 객체를 작성한다.
// const user = {
//   name: "John",
//   age: 20,
//   job: "Designer",
//   getName() {
//     console.log(this.name)
//   },
// }
// user.getName()

// for in -> 객체의 키 개수만큼 반복하여, 첫 번째 키 값부터 마지막 키 값까지 순회할 수 있는 반복문이다!
// const obj = {
//   x: 10,
//   y: 20,
//   z: 30,
// }
// for (value in obj) {
//   console.log(value)
// }

// Object.keys()
// const obj = {
//   x: 10,
//   y: 20,
//   z: 30,
// }
// console.log(Object.keys(obj))

// Object.values()
// const obj = {
//   x: 10,
//   y: 20,
//   z: 30,
// }
// console.log(Object.values(obj))

// Object.entries()
// const obj = {
//   x: 10,
//   y: 20,
//   z: 30,
// }
// console.log(Object.entries(obj)) // [ [ 'x', 10 ], [ 'y', 20 ], [ 'z', 30 ] ]

// hasOwnProperty() -> 객체가 주어진 프로퍼티를 가지고 있는지 여부를 true or false로 반환
// const obj = {
//   name: "John",
//   age: 20,
//   job: "FE",
// }
// console.log(obj.hasOwnProperty("age"))
// console.log(obj.hasOwnProperty("hobby"))

// 선택적 연결(Optional Chaining) -> 존재하지 않을 수도 있는 프로퍼티에 안전하게 접근할 수 있도록 해주는 연산자(?.)를 의미
// const data = {}
// console.log(data?.user) // undefined

// 프로퍼티 키 동적 생성
// const obj = {}
// obj["name"] = "John"
// console.log(obj)

// new Set()
// const arr = [1, 2, 1]
// const aSet = new Set(arr)
// console.log(aSet)

// add(), delete(), has(), clear(), size(), forEach()
// const aSet = new Set()
// aSet.add(1)
// aSet.add(2)
// aSet.add(3)
// console.log(aSet)
// aSet.delete(2)
// console.log(aSet)
// console.log(aSet.has(3))
// aSet.clear()
// console.log(aSet)
// aSet.add(4)
// aSet.add(5)
// console.log(aSet.size) // 메서드가 아님!

// 주어진 배열을 셋을 사용해 중복을 제거하고, 제거한 뒤 요소의 개수를 출력하는 코드를 작성한다.
// const arr = [1, 3, 3, 5, 7, 1, 2, 4, 3]
// const aSet = new Set(arr)
// console.log(aSet.size)

// new Map()
// const arr = [
//   [1, "a"],
//   [2, "b"],
// ]
// const aMap = new Map(arr)
// console.log(aMap)

// set(), get(), has(), delete(), clear(), size
// const aMap = new Map()
// aMap.set(1, "a")
// aMap.set(2, "b")
// console.log(aMap)
// console.log(aMap.get(2))
// console.log(aMap.has(1))
// console.log(aMap.delete(1))
// console.log(aMap)
// aMap.clear()
// console.log(aMap)
// console.log(aMap.size)

// 클래스와 인스턴스 생성
// class User {
//   constructor(name) {
//     this.name = name
//   }
//   printName() {
//     console.log(this.name)
//   }
// }
// const aUser = new User("John")
// aUser.printName()

// 필드
// class User {
//   name = "Kaylee"
//   age = 20
// }
// const aUser = new User()
// console.log(aUser.name)
// console.log(aUser.age)

// 클래스 표현식
// const User = class {
//   constructor(name) {
//     this.name = name
//   }
//   printName() {
//     console.log(this.name)
//   }
// }
// const aUser = new User("John")
// aUser.printName()

// private, protected
// class User {
//   name = "Kaylee"
//   #age = 20
//   printAge() {
//     console.log(this.#age)
//   }
// }
// const aUser = new User()
// console.log(aUser.name)
// console.log(aUser.age) // age는 private 변수여서 외부에서 접근 불가
// aUser.printAge() // 하지만 메서드로는 접근 가능!

// static -> 인스턴스 없이도 사용할 수 있는(종속적이지 않은) 프로퍼티나 메서드로 만들어주는 키워드
// 참고로 인스턴스를 통해 호출하는 메서드는 클래스 메서드라고 부른다다
// class User {
//   static greeting() {
//     console.log("Hello!")
//   }
// }
// User.greeting()

// 상속(Inheritance)
// class SmartPhone {
//   type = "phone"

//   greeting() {
//     console.log("hello")
//   }
// }

// class iPhone extends SmartPhone {
//   brand = "Apple"
// }

// const aiPhone = new iPhone()

// console.log(aiPhone.type)
// console.log(aiPhone.brand)
// aiPhone.greeting()

// instanceof -> 좌변에 주어진 대상이 우변에 주어진 클래스의 인스턴스인지에 따라 true or false 반환
// class SmartPhone {
//   type = "phone"

//   greeting() {
//     console.log("hello")
//   }
// }

// class iPhone extends SmartPhone {
//   brand = "Apple"
// }

// const aiPhone = new iPhone()
// console.log(aiPhone instanceof SmartPhone) // true

// 메서드, 생성자 오버라이딩

// 배열 구조 분해
// const arr = [1, 2, 3, 4, 5]
// const [one, two, three] = arr
// console.log(one, two, three) // 1, 2, 3

// 객체 구조 분해
// const obj = {
//   x: 10,
//   y: 20,
// }
// const { x, y } = obj
// console.log(x, y)
