function onClickButton() {
  var randomNumberOne = Math.floor(Math.random() * 6) + 1;
  var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumberOne + ".png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumberTwo + ".png");

  if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = "Player One Wins!🚩";
  } else if (randomNumberOne < randomNumberTwo) {
    document.querySelector("h1").innerHTML = "Player Two Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!🤝";
  }
}
