const listCafe = document.querySelector('.place-card');
const frame = document.querySelector('.places');
const option = document.querySelector('.list-box1');
const closing = document.querySelector('x-butt');

listCafe.addEventListener("click", ()=>
{
    frame.style.display = "none";
    option.style.display = "block";
});

closing.addEventListener("click", ()=>
{
    frame.style.display = "block";
    option.style.display ="none";
});
