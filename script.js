const submitButton = document.querySelector(".email-submit");
const emailInput  = document.querySelector(".email-input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailTyped = document.querySelector('.written-email');


const submitForm = () => {
    if(emailInput.value == "" || !emailRegex.test(emailInput.value)) {
        document.querySelector(".email-label-validation").classList.remove('hidden');
        emailInput.classList.add('valid-input');
    } else {
        document.querySelector('.sign-up-start').classList.add('hidden');
        document.querySelector('.sign-up-end').classList.remove('hidden');
        emailTyped.innerHTML = emailInput.value;
    }
}

submitButton.addEventListener("click", e => {
    e.preventDefault();
    submitForm()
});