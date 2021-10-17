const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new formData(event.currentTarget);
    if (
        event.currentTarget.elements.email.value === '' || 
        event.currentTarget.elements.password.value === ''
    ) {
        return alert('Заполните все поля');
    }
    const userData = {};
    formData.forEach((value, name) => {
        userData[name] = value;
    });
    console.log(userData);
    form.reset();
}