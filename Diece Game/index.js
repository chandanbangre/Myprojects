var randomNum1=Math.floor((Math.random()*6)+1);

var randomSrc=("images/dice"+randomNum1+".png");

document.querySelectorAll("img")[0].setAttribute("src",randomSrc);


var randomNum2=Math.floor(Math.random()*6)+1;

var randomSrc2=("images/dice"+randomNum2+".png");

document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = ("🥳 Player 1 Wins!");
}
    else if(randomNum2>randomNum1)
    {
        document.querySelector("h1").innerHTML = ("Player 2 wins! 🥳");
    }
    else if(randomNum1===randomNum2){
        document.querySelector("h1").innerHTML=("🥳Draw!🥳");
    }