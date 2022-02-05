const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === "=") {
    if (result.value !== "") {
      result.value = eval(result.value);
    }
  } else if (clickedButtonValue === "C") {
    result.value = "";
  } else {
    result.value += clickedButtonValue;
  }
}
