var randNumber1 = (Math.random() * 6) + 1;

randNumber1 = Math.floor(randNumber1);

var randomDiceImage1 = "./images/dice" + randNumber1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage1);

var randNumber2 = (Math.random() * 6) + 1;

randNumber2 = Math.floor(randNumber2);

var randomDiceImage2 = "./images/dice" + randNumber2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

if(randNumber1 > randNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins 🥳";
}

if(randNumber1 < randNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins 🥳";
}

if(randNumber1 === randNumber2){
    document.querySelector("h1").textContent = "It's A Tie!";
}

