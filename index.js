function myFunction() {
  var num1 = Math.random() * 6;
  var num2 = Math.random() * 6;
  var randomNumber1 = Math.floor(num1) + 1;
  var randomNumber2 = Math.floor(num2) + 1;

  var randomImg1 = "images/dice" + randomNumber1 + ".png";
  var randomImg2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImg1);
  document.querySelector(".img2").setAttribute("src", randomImg2);

  if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "User Win!";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player Bot Win!";
  } else if (randomNumber1 === randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
  }
}
document.getElementById("btn").addEventListener("click", myFunction);
