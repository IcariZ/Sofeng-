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

let checkPassword = document.getElementById("reg_password").value;
    let checkConfPassword = document.getElementById("conf_password").value;
    console.log(checkPassword);
    // console.log(checkPassword);


// function checkPassword(){
//     let checkPassword = document.getElementById("reg_password").value;
//     let checkConfPassword = document.getElementById("conf_password").value;
//     console.log(checkPassword, checkConfPassword);
// }
