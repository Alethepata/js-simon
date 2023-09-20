const content = document.querySelector('h1');

const limit = 5;

let num=genereteNum();

content.innerHTML = num;

let counter = 0;

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


// setInterval
 
const clock =setInterval (function(){

    counter++;

    content.classList.add('d-none');

    if(counter> 1) clearInterval(clock);

},5000);

const clock2 = setInterval (function(){

    counter++;

for ( let i= 0; i<5; i ++ ){
    const numPlayer =parseInt(prompt('numero'));
}

 if(counter> 1) clearInterval(clock2);
},6000);

console.log();