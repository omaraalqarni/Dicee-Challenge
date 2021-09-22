var randomNum1 = Math.floor(Math.random() * 6) +1;
var randomNum2 = Math.floor(Math.random() * 6) +1;
var randomDice1 = "images/dice"+randomNum1 +".png";
var randomDice2 = "images/dice"+randomNum2 +".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
if( randomNum1 > randomNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 wins";
}
else if (randomNum1 < randomNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 wins"; 
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "Tie !"; 

}
