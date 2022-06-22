const colors = [ 'green','red','rgba(133,122,200)','yellow','orange','blue','pink','indigo','violet','gold','purple','cream'];// 
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
 const randomNUmber = getRandomNumber(); //to get random number btwn 0 - 3
 document.body.style.backgroundColor = colors[randomNUmber];
 color.textContent = colors[randomNUmber];
});


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);   
}
