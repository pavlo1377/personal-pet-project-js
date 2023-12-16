// Timer script
const start = document.querySelector("#start-btn");
const stop = document.querySelector("#stop-btn");
const reset = document.querySelector("#reset-btn");

let wmin = document.querySelector("#w-minutes");
let wsec = document.querySelector("#w-seconds");

let bmin = document.querySelector("#b-minutes");
let bsec = document.querySelector("#b-seconds");

let counter = document.querySelector("#counter");

// store a reference to a timer variable
let startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  wmin.innerText = 25;
  wsec.innerText = "00";

  bmin.innerText = 5;
  bsec.innerText = "00";

  counter = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

function timer() {
  //Work Timer Countdown
  if (wsec.innerText != 0) {
    wsec.innerText--;
  } else if (wmin.innerText != 0 && wsec.innerText == 0) {
    wsec.innerText = 59;
    wmin.innerText--;
  }

  //Break Timer Countdown
  if (wmin.innerText == 0 && wsec.innerText == 0) {
    if (bsec.innerText != 0) {
      bsec.innerText--;
    } else if (bmin.innerText != 0 && bsec.innerText == 0) {
      bsec.innerText = 59;
      bmin.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (
    wmin.innerText == 0 &&
    wsec.innerText == 0 &&
    bmin.innerText == 0 &&
    bsec.innerText == 0
  ) {
    wmin.innerText = 25;
    wsec.innerText = "00";

    bmin.innerText = 5;
    bsec.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}

function stopInterval() {
  clearInterval(startTimer);
}

// To do script
let addTodoBtn = document.querySelector("#addTodo");
let inputField = document.querySelector("#inputField");
let toDoContainer = document.querySelector("#toDoContainer");
// добавляє в список коли нажимаєш enter
inputField.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling"); // Corrected the class name
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
    inputField.value = "";

    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
    });
  }
});
//  добавляє в список коли нажимаєш н а+
addTodoBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
});
