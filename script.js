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


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 155,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

$(function() {
  var data = [
    {
      action: 'type',
      strings: ["Accessing restricted files.."],
      output: 'Access Denied..<br><br>',
      postDelay: 1000
    },
  { 
    action: 'type',
    strings: ["500 Internal Error"],
    output: '<span class="gray">Coded by Beji </><br>&nbsp;',
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: ["These are not the error codes you're looking for.", 'Please either report this error to an administrator or return back and forget you were here...'],
    postDelay: 2000
  }
  
];
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.history').html(''); 
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = $('.history').html();
              history = history ? [history] : [];
              history.push('$ ' + prompt.text());
              if(script.output) {
                history.push(script.output);
                prompt.html('');
                $('.history').html(history.join('<br>'));
              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':

          break;
    }
}
