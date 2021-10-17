const inputRef = document.querySelector("#name-input");

const spanRef = document.querySelector("#name-output");

function onClick() {
    if (inputRef.value === "") {
        return spanRef.textContent = 'Anonymous';
    }
    return spanRef.textContent = inputRef.value;
}

inputRef.addEventListener("input", onClick);