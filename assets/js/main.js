function flipCoin() {
  const coin = document.getElementById("coin");
  coin.classList.toggle("flip");
}

function handleChoice(choice) {
  const coin = document.getElementById("coin");

  coin.classList.add("flip");

  let message = "";

  if (choice === "let go") {
    message = "What you release no longer defines you.";
  } else if (choice === "understand") {
    message = "Fear becomes smaller when it is seen clearly.";
  } else if (choice === "process") {
    message = "What is processed no longer controls you.";
  }

  document.getElementById("result").innerText = message;
}
