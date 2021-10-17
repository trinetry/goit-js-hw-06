let counterValue = 0;

const valueRef = document.querySelector("#value");

const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]');

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]');

const increase = () => {
    counterValue++;
    return (valueRef.textContent = counterValue);
};

const decrease = () => {
    counterValue--;
    return (valueRef.textContent = counterValue);
};

incrementBtnRef.addEventListener("click", increase);

decrementBtnRef.addEventListener("click", decrease); 