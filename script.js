let score = 0;
let pointsPerSecond = 0;
let clickMultiplier = 1;

let option1 = {
  cost: 10,
  element: document.getElementById("option-1"),
};

let option2 = {
  cost: 100,
  bonus: 1,
  element: document.getElementById("option-2"),
};

let option3 = {
  cost: 1000,
  bonus: 10,
  element: document.getElementById("option-3"),
};

let option4 = {
  cost: 10000,
  bonus: 100,
  element: document.getElementById("option-4"),
};

let option5 = {
  cost: 100000,
  bonus: 1000,
  element: document.getElementById("option-5"),
};

let option6 = {
  cost: 1000000,
  bonus: 10000,
  element: document.getElementById("option-6"),
};
let option7 = {
  cost: 10000000,
  bonus: 10000000,
  element: document.getElementById("option-7"),
};
let option8 = {
  cost: 100000000,
  bonus: 1000000000,
  element: document.getElementById("option-8"),
};
let option9 = {
  cost: 1000000000,
  bonus: 10000000000,
  element: document.getElementById("option-9"),
};
let option10 = {
  cost: 10000000000,
  bonus: 100000000000,
  element: document.getElementById("option-10"),
};
let option11 = {
  cost: 1000000000000,
  bonus: 1000000000000,
  element: document.getElementById("option-11"),
};

let options = [option1, option2, option3, option4, option5, option6, option7];

const clickPowerEl = document.getElementById("click-power");
const pointsPerSecondEl = document.getElementById("points-per-second");
const scoreEl = document.getElementById("score");
const clickerEl = document.getElementById("clicker");

clickerEl.addEventListener("click", clickClicker);

options.forEach((option) => {
  option.element.addEventListener("click", function () {
    clickOption(option);
  });
});

setInterval(function () {
  score += pointsPerSecond;
  updateSite();
}, 1000);

setInterval(function () {
  localStorage.setItem("FEClickerOptions", JSON.stringify(options));
  localStorage.setItem("FEClickerVars", JSON.stringify({ score, pointsPerSecond, clickMultiplier }));
}, 60000);

function loadGame() {
  const localStorageOptions = JSON.parse(localStorage.getItem("FEClickerOptions"));
  const localStorageVars = JSON.parse(localStorage.getItem("FEClickerVars"));

  if (localStorageOptions && localStorageVars) {
    options.forEach((option, index) => {
      option.cost = localStorageOptions[index].cost;
      if (index > 0) option.bonus = localStorageOptions[index].bonus;
    });
    score = localStorageVars.score;
    pointsPerSecond = localStorageVars.pointsPerSecond;
    clickMultiplier = localStorageVars.clickMultiplier;
  }
}

function clickClicker() {
  score += clickMultiplier;
  updateSite();
}

function clickOption(option) {
  if (option.cost <= score) {
    if (option.element.id == "option-1") clickMultiplier *= 2;
    else {
      pointsPerSecond += option.bonus;
      option.bonus *= 2;
    }
    score -= option.cost;
    option.cost *= 3;
    updateSite();
  }
}

function updateSite() {
  clickPowerEl.innerHTML = `Click power: ${clickMultiplier}`;
  pointsPerSecondEl.innerHTML = `Points per second: ${pointsPerSecond}`;
  scoreEl.innerHTML = `Score: ${score}`;
  option1.element.innerHTML = `Make a project <span>Click power x2</span>
    <p>Cost: ${option1.cost}</p>`;
  option2.element.innerHTML = `Learn HTML <span>+${option2.bonus} points/sec</span>
    <p>Cost: ${option2.cost}</p>`;
  option3.element.innerHTML = `Learn CSS <span>+${option3.bonus} points/sec</span>
    <p>Cost: ${option3.cost}</p>`;
  option4.element.innerHTML = `Learn JavaScript <span>+${option4.bonus} points/sec</span>
    <p>Cost: ${option4.cost}</p>`;
  option5.element.innerHTML = `Learn a library <span>+${option5.bonus} points/sec</span>
    <p>Cost: ${option5.cost}</p>`;
  option6.element.innerHTML = `Learn a framework <span>+${option6.bonus} points/sec</span>
    <p>Cost: ${option6.cost}</p>`;
  option7.element.innerHTML = `Graduation <span>+${option7.bonus} points/sec</span>
    <p>Cost: ${option7.cost}</p>`;
    option8.element.innerHTML = `Looking for a job <span>+${option8.bonus} points/sec</span>
    <p>Cost: ${option8.cost}</p>`;
    option9.element.innerHTML = `Intreview <span>+${option9.bonus} points/sec</span>
    <p>Cost: ${option9.cost}</p>`;
    option10.element.innerHTML = `Working <span>+${option10.bonus} points/sec</span>
    <p>Cost: ${option10.cost}</p>`;
    option11.element.innerHTML = `Getting old <span>+${option11.bonus} points/sec</span>
    <p>Cost: ${option11.cost}</p>`;
  options.forEach((option) => {
    if (score >= option.cost) option.element.classList.add("available");
    else option.element.classList.remove("available");
  });
}

loadGame();
updateSite();


document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
      return false;
  } else {
      return true;
  }
};
$(document).keypress("u",function(e) {
if(e.ctrlKey)
{
return false;
}
else
{
return true;
}
});