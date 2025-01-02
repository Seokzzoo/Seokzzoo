const button = document.querySelector(".open")
const close = document.querySelector(".close")
const container = document.querySelector(".container")

button.addEventListener("click", () => {
  container.style.display = "flex"
  button.style.display = "none"
})

close.addEventListener("click", () => {
  container.style.display = "none"
  button.style.display = "block"
})
