const content = document.querySelector('h1');

const limit = 5;

let num=genereteNum();
 console.log(num);
content.innerHTML = num;

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