let btnPlay = document.querySelector(".btn-play");
let btnRestart = document.querySelector(".btn-restart");

let btnRed = document.querySelector(".btn-red");
let btnYellow = document.querySelector(".btn-yellow");
let btnBlue = document.querySelector(".btn-blue");
let btnGreen = document.querySelector(".btn-green");

let levelHeading = document.querySelector("h1");
let timeHeading = document.querySelector("h2");
let message = document.querySelector("p");
let section = document.querySelector(".record");

let timeArray = [];
let tr;
let date = new Date();

let arr = [];
let btnClick = [];
let level = 1;
let flashTime;
let leaderBoard = 0;
let leaderBoardArray = [];
let leaderBoardObj = {};

let colors = ["red", "green", "blue", "yellow"];
let btnObj = {
  red: btnRed,
  yellow: btnYellow,
  blue: btnBlue,
  green: btnGreen,
};
deActivateButtons(true);
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  timeHeading.innerHTML = d = date.toLocaleTimeString();
  return d;
}

//windows onload function - have to display the leaderboard
window.addEventListener("DOMContentLoaded", () => {
  const oldRecords = JSON.parse(localStorage.getItem("records"));
  console.log(localStorage.getItem("records"));
  if (oldRecords) {
    //copy of score history to push new score at last
    leaderBoardArray = [...oldRecords];
  }
  oldRecords.slice().reverse().forEach((element) => {
    tr = document.createElement("tr");
    section.appendChild(tr);
    td1 = document.createElement("td");
    td1.innerHTML = element.startTime;
    tr.appendChild(td1);
    td2 = document.createElement("td");
    td2.innerHTML = element.finishTime;
    tr.appendChild(td2);
    td3 = document.createElement("td");
    td3.innerHTML = element.record;
    tr.appendChild(td3);
  });
});

// Event call by clicking play
btnPlay.addEventListener("click", async () => {
  btnPlay.disabled = true;
  btnPlay.classList.add("opacity");
  btnRestart.classList.remove("opacity");
  btnPlay.classList.remove("flashing-buttons");

  if (timeArray[0] === undefined) {
    tr = document.createElement("tr");
    section.appendChild(tr);
    let td = document.createElement("td");
    td.innerHTML = myTimer();
    timeArray.push(myTimer());
    leaderBoardObj.startTime = myTimer();
    tr.appendChild(td);
  }
  message.innerText = "";
  activateButtons(false);
  flashTime = level + 1;
  for (let i = 1; i <= flashTime; i++) {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    arr.push(randColor);
    await flashing(randColor);
  }
  
  btnRestart.disabled = false;
});

function activateButtons(value) {
  btnRed.disabled = value;
  btnYellow.disabled = value;
  btnBlue.disabled = value;
  btnGreen.disabled = value;
}
function deActivateButtons(value) {
  btnRed.disabled = value;
  btnYellow.disabled = value;
  btnBlue.disabled = value;
  btnGreen.disabled = value;
}
// Flash buttons
function flashing(color) {
  return new Promise((resolve, reject) => {
    btnObj[color].classList.add("flash");
    setTimeout(() => {
      btnObj[color].classList.remove("flash");
      setTimeout(() => {
        resolve();
      }, 250);
    }, 250);
  });
}

btnRed.addEventListener("click", () => {
  btnClick.push("red");
  userResult(arr[0], btnClick[0]);
});
btnYellow.addEventListener("click", () => {
  btnClick.push("yellow");
  userResult(arr[0], btnClick[0]);
});
btnBlue.addEventListener("click", () => {
  btnClick.push("blue");
  userResult(arr[0], btnClick[0]);
});
btnGreen.addEventListener("click", () => {
  btnClick.push("green");
  userResult(arr[0], btnClick[0]);
});

function userResult(arr1, arr2) {
  if (arr1 === arr2) {
    arr.shift();
    btnClick.shift();
    if (arr.length === 0 && btnClick.length === 0) {
      success();
    }
  } else {
    failure();
  }
}

function success() {
  deActivateButtons(true);
  btnPlay.classList.add("flashing-buttons");
  level += 1;
  levelHeading.innerText = `Level ${level}`;
  message.innerHTML = `You have won this round.<br>Click on the play button to start next round`;
  leaderBoard += 1;
  btnPlay.disabled = false;
  btnPlay.classList.remove("opacity");
}

function failure() {
  deActivateButtons(true);
  timeArray = [];
  message.innerHTML = `You Lost this round!<br>Click on restart to start again!`;
  btnRestart.classList.add("flashing-buttons");
  btnPlay.classList.remove("flashing-buttons");
  btnPlay.disabled = true;
  btnPlay.classList.add("opacity");
  let td2 = document.createElement("td");
  td2.innerHTML = myTimer();
  tr.appendChild(td2);
  let td3 = document.createElement("td");
  td3.textContent = `${leaderBoard}`;
  tr.appendChild(td3);
  leaderBoardObj.finishTime = myTimer();
  leaderBoardObj.record = leaderBoard;
  leaderBoardArray.splice(leaderBoardArray.length, 1, leaderBoardObj);
  localStorage.setItem("records", JSON.stringify(leaderBoardArray));
}

btnRestart.addEventListener("click", () => {
  btnRestart.classList.remove("flashing-buttons");
  btnPlay.classList.add("flashing-buttons");
  message.innerText = "";
  deActivateButtons(true);
  level = 1;
  levelHeading.innerText = `Level ${level}`;
  flashTime = level;
  leaderBoard = 0;
  arr = [];
  btnClick = [];
  btnPlay.disabled = false;
  btnPlay.classList.remove("opacity");
  btnRestart.classList.add("opacity");
  btnRestart.disabled = true;
  console.log(level, flashTime, arr);
});
