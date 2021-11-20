"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const message = function (s) {
  document.querySelector(".message").textContent = s;
};

const checkNum = function () {
  let userGuess = Number(document.querySelector(".guess").value);
  let myBool = userGuess >= 1 && userGuess <= 20;

  //when the user inserts invalid input
  if (!myBool) {
    message("please insert a valid number! 😉");
  }
  //when the user inserts the correct number
  else if (userGuess === secretNumber) {
    message("Correct number! 🎯");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  }

  //when the user inserts a wrong number
  else if (userGuess !== secretNumber) {
    document.querySelector("body").style.backgroundColor = "#FF4136";
    if (score > 1) {
      message(
        userGuess > secretNumber
          ? "📈 Too high, try again"
          : "📉 Too low, try again"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message("You lost 😪");
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
};

document.querySelector(".check").addEventListener("click", checkNum);

document.querySelector(".again").addEventListener("click", function () {
  message("Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkNum();
  }
});
