const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


const passwordInput = document.getElementById("reg_password");
const confirmPasswordInput = document.getElementById("conf_password");
console.log(passwordInput, confirmPasswordInput);

form.addEventListener("submit", function (event) {
    // console.log("p");
    if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();
        alert("Passwords do not match!");
    }
});
