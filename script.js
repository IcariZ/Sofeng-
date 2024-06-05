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

// console.log("dor")

function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('reg_password').value;
    
    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');

}

function loginFunc(e){
    console.log("in");
    event.preventDefault();

    var username = document.getElementById('username').value;
    console.log(username)
    var pass = document.getElementById('password').value;
    console.log(pass)
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if (user == null){
        result.innerHTML = 'Oops! Invalid crendetials! Try again.';
    } else if (username == data.username && pass == data.password){
        result.innerHTML = 'logged in!';
    } else {
        result.innerHTML = 'Oops! Invalid crendetials! Try again.';
    }

}