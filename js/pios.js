'use strict';
// HTML Variables
const pios_game = document.getElementById('pios_game');
const deviceNotCompatable = document.getElementById('deviceNotCompatable');
const pios_gamePlayerInput = document.getElementById('pios_gamePlayerInput');
var  playerInputValue = document.getElementById('pios_gamePlayerInput').value;
var pios_gameScreen = document.getElementById('pios_gameScreen');
// Player Variables
var balance = 10000;
var hp = 10;
var xp = 0;
var rank = 1;
var rl = 1;
var playerName = "";
// Blacksmith Variables
var woodenKnAtk = 3;
var stoneKnAtk = 5;
var ironKnAtk = 7;
var starterSwAtk = 9;
var trainSwAtk = 13;
var armySwAtk = 15;
var leatherArAtk = 17;
var chainArAtk = 19;
var ironArAtk = 21;
var longDistanceBAtk = 23;
var miniBAtk = 25;
var rapidBAtk = 27;
var land = 25
var bankspace = 5;
// Backpack Variables
var slotOne = 0;
var slotTwo = 0;
var slotThree = 0;
var slotFour = 0;
var slotFive = 0;
var slotSix = 0;
var itemOne = 'Empty';
var itemTwo = 'Empty';
var itemThree = 'Empty';
var itemFour = 'Empty';
var itemFive = 'Empty';
var itemSix = 'Empty';
var ava  = slotOne + slotTwo + slotThree + slotFour + slotFive + slotSix;
// Loadouts
var cl = 1;
var tcl = "";
// JavaScript Temp Variables
var gameStarted = false;
var nameStarted = false;

// Other JavaScript Variables
const lineLine = "_______________________________________________________";
const lineStart =  "start        (story mode)"
const lineStore =  "store        (Stop by the store)"
const lineInfo = "info         (This will show your hp,xp,atd, etc)"
const lineLoadout = "loadout      (What will I take into combat)"
const lineBlacksmith = "blacksmith   (Take a trip to the blacksmith)"
const lineJob = "job          (Start looking for work)"
const lineBackpack = "backpack     (Let's look at that inventory)"
const lineSave = "save         (To save the game)"
const lineLoad = "load         (Load a saved game)"
const lineQuit = "quit         (You'll figure it out)"
const lineBreak = "<br />";
const lineSpace = " ";

/*
Arrays
*/

{
    "name"


}

/*
Functions
*/

function deviceCheck() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    pios_game.classList.add('hidden');
    deviceNotCompatable.classList.remove('hidden');
    deviceNotCompatable.classList.add('shown');
  }
}

function clearInner(str) {
  str.innerHTML = null;
}

function clearValue(str) {
  str.value = null;
}

/*
https://stackoverflow.com/users/922737/armen-shimoon

$(function () {
  showText("#msg", "Hello, World!", 0, 500);
});
*/

function showText(target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

function gameStart() {
  showText("#pios_gameScreen", "Welcome to Project Insite! A text based survival RPG.", 0, 75);
  setTimeout(function(){
    pios_gameScreen.innerHTML = null;
    showText("#pios_gameScreen", "Please enter a name. You will be called this through out the story.", 0, 75);
    pios_gamePlayerInput.value = "";
    pios_gamePlayerInput.placeholder = "Enter a name!";
    gameStarted = true;
  }, 5975);
}

function nameStart() {
  nameStarted = true;
  var playerName = pios_gamePlayerInput.value;
  var playerNameLength = playerName.length;
  var numberTotal = 9 + playerNameLength;
  var timeoutSpeed = (numberTotal *= 75) + 2000;
  pios_gameScreen.innerHTML = null;
  showText("#pios_gameScreen", ("Welcome" + " " + playerName + "!"), 0, 75);
  setTimeout(function(){
    showMenu();
  }, timeoutSpeed);
}

function showMenu() {
  pios_gameScreen.innerHTML = null;
  pios_gameScreen.innerHTML = "Menu" + lineBreak + lineLine + lineBreak + lineStart + lineBreak + lineStore + lineBreak + lineInfo + lineBreak + lineLoadout + lineBreak + lineBlacksmith + lineBreak + lineJob + lineBreak + lineBackpack + lineBreak + lineSave + lineBreak + lineLoad + lineBreak + lineQuit + lineBreak + lineLine;
  pios_gamePlayerInput.value = "";
  pios_gamePlayerInput.placeholder = "Make a selection!";
}


// Event Listeners

pios_gamePlayerInput.addEventListener('keypress', function(e) {
  var key = e.which || e.keyCode;
  var  playerInputValue = document.getElementById('pios_gamePlayerInput').value;
    if (key === 13 && playerInputValue == 'Start') {
      gameStart()
    } else if (key === 13 && gameStarted == true && nameStarted == false) {
      nameStart()
      console.log('Name Passed')
    } else if (key === 13 && playerInputValue == 'job') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'start') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'store') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'info') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'loadout') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'blacksmith') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'backpack') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'save') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'load') {
      gameStart()
    } else if (key === 13 && playerInputValue == 'quit') {
      gameStart()
    }
});
