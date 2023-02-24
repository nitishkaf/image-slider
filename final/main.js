let slides = document.getElementsByClassName("slider_slide");

let current = 0;

document.getElementById("next").addEventListener('click', () => {
  changeSlide(current + 1)
})

document.getElementById("prev").addEventListener('click', () => {
  changeSlide(current - 1)
})

function changeSlide(number) {
  if (number >= slides.length) {
    number = 0;
  }

  if (number < 0) {
    number = slides.length - 1;
  }

  slides[current].classList.toggle("active")

  slides[number].classList.toggle('active')

  current = number
}
