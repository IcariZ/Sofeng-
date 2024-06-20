function showAlert(event) {
    event.preventDefault(); 
    alert('Please Log In / Sign Up to access this page');
}

document.getElementById('home').addEventListener('click', showAlert);
document.getElementById('calendar').addEventListener('click', showAlert);
document.getElementById('pomodoro').addEventListener('click', showAlert);
document.getElementById('weeklyAnalysis').addEventListener('click', showAlert);
document.getElementById('recommendations').addEventListener('click', showAlert);


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

// localStorage.clear();

// for(var i=0, len=localStorage.length; i<len; i++) {
//     var key = localStorage.key(i);
//     var value = localStorage[key];
//     console.log(key + " => " + value);
// }

function signup(e){
    event.preventDefault();

    var email = document.getElementById('new_email').value;
    var pass = document.getElementById('reg_password').value;
    
    var user = {
        email: email,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    console.log('user added');
    post_register.innerHTML = 'Register Succesful!';
}

function loginFunc(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(email);
    var data = JSON.parse(user);

    if (user == null){
        result.innerHTML = 'Oops! Invalid crendetials! Try again.';
    } else if (email == data.email && pass == data.password){
        window.location.href = '/Home/home.html';
    } else {
        result.innerHTML = 'Oops! Invalid crendetials! Try again.';
    }

}