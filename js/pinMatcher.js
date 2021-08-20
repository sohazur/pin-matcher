function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", (event) => {
  const number = event.target.innerText;
  const calc = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calc.value = "";
    } else if (number == "&lt") {
      calc.value = calc.value.slice(0, -1);
    }
  } else {
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
  }
});

function verifyPin() {
  const tryLeft = document.getElementById("tryLeft");
  const typedPin = document.getElementById("typed-numbers").value;
  const genPin = document.getElementById("display-pin").value;
  const failError = document.getElementById("verify-failed");
  const successMsg = document.getElementById("verify-success");
  if (typedPin == genPin && genPin != "") {
    successMsg.style.display = "block";
    failError.style.display = "none";
  } else if (typedPin != genPin && genPin != "") {
    tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
    if (tryLeft.innerText <= 0) {
      document.getElementById("tryLeftZero").style.display = "block";
      failError.style.display = "none";
      document.getElementById("submit").disabled = true;
    } else {
      failError.style.display = "block";
      successMsg.style.display = "none";
    }
  }
}
