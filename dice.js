let container=document.createElement('div');
container.setAttribute('class',"container");
// let randomNumber1=Math.random();
let header=document.createElement('h1');
header.innerText="Refresh Me";
container.appendChild(header);
let dice=document.createElement('div');
dice.setAttribute('class',"dice");
//random..
let player=document.createElement('p');
player.innerText="Player1";
dice.appendChild(player);
randomNumber1=Math.floor(Math.random()*6+1);
let randomImage="./images/dice"+randomNumber1+".png";
let imageContainer=document.createElement('img');
imageContainer.setAttribute('src',randomImage);
dice.appendChild(imageContainer);
//Random2
let player2=document.createElement('p');
player2.innerText='Player2';
dice.appendChild(player2);
randomNumber2 =Math.floor(Math.random()*6+1);
let randomImage2 ="./images/dice"+randomNumber2+".png";
let imageContainer2 =document.createElement('img');
imageContainer2.setAttribute('src',randomImage2);

dice.appendChild(imageContainer2);
container.appendChild(dice);

if(randomNumber1 > randomNumber2){
    header.innerText="Player 1 Wins";
}
else if(randomNumber1 === randomNumber2){
    header.innerText="It's a Tie"
}
else{
    header.innerText="Player 2 Wins"
}
document.body.appendChild(container);