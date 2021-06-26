
function onClickButton() {

  var playerOne = prompt("Enter Player 1");
  var playerTwo = prompt("Enter Player 2");

  var randomNumberOne = Math.floor(Math.random() * 6) + 1;
  var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumberOne + ".png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumberTwo + ".png");

  document.querySelector(".p1").innerHTML = playerOne;
  document.querySelector(".p2").innerHTML = playerTwo;

  if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = playerOne + " " + "Wins!🚩";
  } else if (randomNumberOne < randomNumberTwo) {
    document.querySelector("h1").innerHTML = playerTwo + " " + "Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!🤝";
  }
}

