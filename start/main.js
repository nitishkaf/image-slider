let slides = document.getElementsByClassName("slider_slide")

const prev = document.getElementById('previous')

const next = document.getElementById('next')

let currentNumber = 0;

prev.addEventListener('click', () => {
  console.log(`current Number: ${currentNumber}`)
  changeSlide(currentNumber - 1)
})

next.addEventListener('click', () => {
  console.log(`next Number: ${currentNumber}`)
  changeSlide(currentNumber + 1)
})

function changeSlide(number) {
  if (number >= slides.length) {
    number = 0;
  }

  if (number < 0) {
    number = slides.length - 1;
  }

  slides[currentNumber].classList.toggle("active")
  slides[number].classList.toggle('active')

  currentNumber = number
}
