let rotation = 0;

function flipCoin() {
  const coin = document.getElementById("coin");

  rotation += 180;

  coin.style.transform = `rotateY(${rotation}deg)`;
}

function handleChoice(choice) {
  const coin = document.getElementById("coin");

  rotation += 180;

  coin.style.transform = `rotateY(${rotation}deg)`;

  let message = "";

  if (choice === "let go") {
    message = "What I release no longer controls me.";
  } 
  else if (choice === "understand") {
    message = "My fear became smaller when I looked closely at it.";
  } 
  else if (choice === "face it") {
    message = "My fear seemed less powerful when I decided to face it.";
  }

  document.getElementById("result").innerText = message;
}
