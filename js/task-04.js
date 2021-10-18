let counterValue = 0;

const valueRef = document.querySelector("#value");

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]');

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]');

incrementBtnRef.addEventListener("click", () => {
  counterValue++;
    valueRef.textContent = counterValue;
});

decrementBtnRef.addEventListener("click", () => {
  counterValue--;
    valueRef.textContent = counterValue;
});