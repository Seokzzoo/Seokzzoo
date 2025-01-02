// const scissor = document.querySelector(".red")
// const rock = document.querySelector(".blue")
// const paper = document.querySelector(".green")
// const youChoice = document.querySelector(".you-choice")
// const computerChoice = document.querySelector(".computer-choice")
// const result = document.querySelector(".result")

// const results = ["scissor", "rock", "paper"]

// scissor.addEventListener("click", () => {
//   const tmp = Math.floor(Math.random() * 3)
//   if (results[tmp] == "scissor") {
//     result.innerText = "무승부"
//   } else if (results[tmp] == "paper") {
//     result.innerText = "사용자 승"
//   } else {
//     result.innerText = "컴퓨터 승"
//   }
// })

// rock.addEventListener("click", () => {
//   const tmp = Math.floor(Math.random() * 3)
//   if (results[tmp] == "scissor") {
//     result.innerText = "무승부"
//   } else if (results[tmp] == "paper") {
//     result.innerText = "컴퓨터 승"
//   } else {
//     result.innerText = "사용자 승"
//   }
// })

// paper.addEventListener("click", () => {
//   const tmp = Math.floor(Math.random() * 3)
//   if (results[tmp] == "scissor") {
//     result.innerText = "컴퓨터 승"
//   } else if (results[tmp] == "paper") {
//     result.innerText = "무승부"
//   } else {
//     result.innerText = "사용자 승"
//   }
// })

const computerChoice = document.querySelector(".computer-choice")
const userChoice = document.querySelector(".you-choice")
const theWinner = document.querySelector(".result")
const buttons = document.querySelectorAll("button")

const result = ["가위", "바위", "보"]

function show(user, computer, winner) {
  computerChoice.innerText = computer
  userChoice.innerText = user
  theWinner.innerText = winner
}

function game(user, computer) {
  let winner

  if (user === computer) {
    winner = "무승부"
  } else {
    switch (user + computer) {
      case "가위바위":
      case "바위보":
      case "보가위":
        winner = "컴퓨터 승리!"
        break
      case "가위보":
      case "바위가위":
      case "보바위":
        winner = "당신 승리!"
        break
    }
  }

  show(user, computer, winner)
}

function play(event) {
  const user = event.target.innerText
  const randomIndex = Math.floor(Math.random() * 3)
  const computer = result[randomIndex]

  game(user, computer)
}

buttons.forEach((button) => {
  button.addEventListener("click", play)
})
