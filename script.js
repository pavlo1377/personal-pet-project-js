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

  counter.innerText = 0;
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

// Moon button change
const moonBtn = document.querySelector("#moon-btn");
const workParagraph = document.querySelector("#work");
const breakParagraph = document.querySelector("#break");
const cyclesParagraph = document.querySelector("#cycles");
const semiColon1 = document.querySelector("#semicolon1");
const semiColon2 = document.querySelector("#semicolon2");
const mainContainer = document.querySelector("#main-container");
const toDoContainer = document.querySelector("#toDo-container");
const toDoTitle = document.querySelector("#toDo-title");
const headerContainer = document.querySelector(".header-container");
const headerTitle = document.querySelector(".header-title");

moonBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#151111";

  workParagraph.style.color = "white";
  breakParagraph.style.color = "white";
  cyclesParagraph.style.color = "white";
  moonBtn.style.border = "3px solid #580bd2";
  sunBtn.style.border = "2px solid black";

  semiColon1.style.color = "white";
  semiColon2.style.color = "white";

  wmin.style.color = "white";
  wsec.style.color = "white";
  bmin.style.color = "white";
  bsec.style.color = "white";

  mainContainer.style.backgroundColor = "#1c1b1b";
  toDoContainer.style.backgroundColor = "#1c1b1b";

  toDoTitle.style.color = "white";
  headerContainer.style.backgroundColor = "#1c1b1b";
  headerTitle.style.color = "white";
  focuserIcon.style.backgroundColor = "#1c1b1b";
});

// Sun button change

const sunBtn = document.querySelector("#sun-btn");

sunBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "#ede6e6";
  workParagraph.style.color = "black";
  breakParagraph.style.color = "black";
  cyclesParagraph.style.color = "black";
  sunBtn.style.border = "3px solid #ead409";
  moonBtn.style.border = "2px solid black";

  semiColon1.style.color = "black";
  semiColon2.style.color = "black";

  wmin.style.color = "black";
  wsec.style.color = "black";
  bmin.style.color = "black";
  bsec.style.color = "black";

  mainContainer.style.backgroundColor = "#fff";
  toDoContainer.style.backgroundColor = "#fff";

  toDoTitle.style.color = "black";
  headerContainer.style.backgroundColor = "#f0f0f0";
  headerTitle.style.color = "black";
  focuserIcon.style.backgroundColor = "#f0f0f0";
});

// reload button
const focuserIcon = document.querySelector("#focuser-icon-btn");
focuserIcon.addEventListener("click", function () {
  window.location.reload();
});
