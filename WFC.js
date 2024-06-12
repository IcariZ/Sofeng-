const jakut = document.querySelector('.jakut');
const jaksel = document.querySelector('.jaksel');
const frame = document.querySelector('.places');
const option = document.querySelector('.list-box1');
const closing = document.querySelector('.x-butt');
const option2 = document.querySelector('.list-box2');

jakut.addEventListener("click", ()=>
{
    frame.style.display = "none";
    option.style.display = "block";
});

closing.addEventListener("click", ()=>
{
    frame.style.display = "block";
    option.style.display ="none";
});

jaksel.addEventListener("click", ()=>
{
    frame.style.display = "none";
    option.style.display = "block";
});
