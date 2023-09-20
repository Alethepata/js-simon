const content = document.querySelector('h1');

const limit = 5;

let num=genereteNum();

content.innerHTML = num;

let counter = limit;

// function num

function genereteNum(){
 const nums = [];
  while(nums.length < limit){
 
  const numRandom = randomize(1,9); 
 
  nums.push(numRandom);

} 
return nums;
}


function randomize(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}


// setTimeOut

setTimeout (function(){
 content.classList.add('d-none');
},counter* 1000);

setTimeout (function(){
 const numPlayer1 = prompt('numero');
 const numPlayer2 = prompt('numero');
 const numPlayer3 = prompt('numero');
 const numPlayer4 = prompt('numero');
 const numPlayer5 = prompt('numero');
},6000);

console.log();