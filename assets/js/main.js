function flipCoin() {
  const coin = document.getElementById("coin");
  coin.classList.toggle("flip");
}

function handleChoice(choice) {
  const coin = document.getElementById("coin");

  coin.classList.add("flip");

  let message = "";

  if (choice === "let go") {
    message = "What I release no longer controls me.";
  } else if (choice === "understand") {
    message = "Fear becomes smaller when it is seen clearly.";
  } else if (choice === "face it") {
    message = "What is pr.";
  }

  document.getElementById("result").innerText = message;
}
