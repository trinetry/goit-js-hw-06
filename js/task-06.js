const textInputRef = document.querySelector("#validation-input");

const validInput = (event) => {
    if (event.currentTarget.value.length === 6) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.replace("invalid", "valid");
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.replace("valid", "invalid");
    }
};

textInputRef.addEventListener("blur", validInput)