const content = document.querySelector('h1');
const contentMessage = document.querySelector('h2');

const limit = 5;

let num=genereteNum();

content.innerHTML = num.join(' ');

let counter = 0;

const player= [];


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

    content.innerHTML = ('');

    if(counter> 1) clearInterval(clock);

},5000);

const clock2 = setInterval (function(){

    counter++;

for ( let i= 0; i<5; i ++ ){

    const numPlayer =parseInt(prompt('numero'));

    player.push(numPlayer);


    const guessed= [];
    for(let p = 0; p < player.length; p++){
        const nPlayer = player[p];
        if( num.includes(nPlayer)){
            guessed.push(nPlayer);
           
        }
      
    }console.log(guessed);
    if(guessed.length === 0){
        contentMessage.innerHTML = 'Non hai indovinato nemmeno un numero'; 
    }else if (guessed.length === 5) {
        contentMessage.innerHTML = ` Hai indovinato tutti i numeri : ${guessed.join(' ')}`;
    }else{
        contentMessage.innerHTML = ` Hai indovinato ${guessed.length} numeri : ${guessed.join(' ')}`;
    }
    
}

 if(counter> 1) clearInterval(clock2);

},6000);

