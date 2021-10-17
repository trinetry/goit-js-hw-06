function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColorRef = document.querySelector(".widget");
const span = document.querySelector(".color");

function onButtonClick(event) {
  span.textContent = getRandomHexColor();
  if (!event.target.classList.contains("change-color")) {
    return;
  }
  return (document.body.style.background = getRandomHexColor());
}

randomColorRef.addEventListener("click", onButtonClick);