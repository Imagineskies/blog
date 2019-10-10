'use strict';
// Variable
var fear = document.getElementById('sectionFear');
var forgoten = document.getElementById('sectionForgoten');
var grief = document.getElementById('sectionGrief');
var alife = document.getElementById('sectionALife');
var school = document.getElementById('sectionSchool');
var work = document.getElementById('sectionWork');
var me = document.getElementById('sectionMe');
var malnourished = document.getElementById('sectionMalnourished');
var thingstopainful = document.getElementById('sectionThingsToPainful');
var dearfutureself = document.getElementById('sectionDearFutureSelf');
var fearBtn = document.getElementById('buttonFear');
var forgotenBtn = document.getElementById('buttonForgoten');
var griefBtn = document.getElementById('buttonGrief');
var alifeBtn = document.getElementById('buttonALife');
var schoolBtn = document.getElementById('buttonSchool');
var workBtn = document.getElementById('buttonWork');
var meBtn = document.getElementById('buttonMe');
var malnourishedBtn = document.getElementById('buttonMalnourished');
var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
var pdwCopyBtn = document.getElementById('pdwCopy');
var numberSlideRange = $("#numberSlide").val();
var techMenuTemp = document.getElementById('techMenuTemp');
var techMenuValue = 0;
var poemBody = document.getElementById('poemBody');
var formRecTextbox = document.getElementById('formRecTextbox');
const checkMarkOne = document.querySelector('#checkMarkOne');
const checkMarkTwo = document.querySelector('#checkMarkTwo');
const checkMarkThree = document.querySelector('#checkMarkThree');
const checkMarkFour = document.querySelector('#checkMarkFour');
var checkMarkOnePlace = 'unclicked';
var checkMarkTwoPlace = 'unclicked';
var checkMarkThreePlace = 'unclicked';
var checkMarkFourPlace = 'unclicked';
var upperCase = "";
var lowerCase = "";
var numbers = "";
var special = "";

/*
____________________________________________________________________________________
Functions
____________________________________________________________________________________
*/

$(".sliding-link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  console.log(aid)
  $('html,body').animate({
    scrollTop: $(aid).offset().top - 100
  }, 1500);
});

function clearBox(elementID){
  document.getElementById(elementID).innerHTML = "";
}

function removeCheck(i) {
  i.classList.add('checkMarkEmpty');
  i.classList.remove('checkMarkFull');
}

function addCheck(i) {
  i.classList.add('checkMarkFull');
  i.classList.remove('checkMarkEmpty');
}

function adLCL() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
}

function addSN() {
  var numbers = '0123456789';
}

function addNB() {
  var special = '!@#$%^&*()';
}

function makeid(length) {
  var characterTotal = upperCase + lowerCase + numbers + special;
  console.log(characterTotal)
  if (characterTotal == "") {
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "You must make a selection for this to work.";
  } else {
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}

function slideRange() {
  var numberSlideRange = $("#numberSlide").val();
  document.getElementById("thumb").innerHTML = numberSlideRange;
  document.getElementById("numberSlideTextBox").value = "";
  document.getElementById("numberSlideTextBox").value = makeid(numberSlideRange);
}

 function exitPoemsMenu() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
}

function OpenPoemsNav() {
  var screenwidth = $(window).width();
  if (screenwidth < 720) {
    document.getElementById("mainPoemsMenuM").style.width = "100%";
    document.getElementById("mainPoemsContentM").style.opacity = 1;
  } else {
    document.getElementById("mainPoemsMenuM").style.width = "40%";
    document.getElementById("mainPoemsContentM").style.opacity = 1;
  }
}

function techMenuTempDisply() {
  if (techMenuValue === 0) {
    techMenuValue = 1;
    techMenuTemp.style.display = "block";
    console.log(techMenuValue)
  } else {
    techMenuValue = 0;
    techMenuTemp.style.display = "none";
    console.log(techMenuValue)
  }
}

function onFear() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  document.getElementById("mainPoemsContentM").style.opacity = 0;
  fear.classList.add('shown');
  fear.classList.remove('hidden');
  fearBtn.classList.add('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onForgoten() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('shown');
  forgoten.classList.remove('hidden');
  forgotenBtn.classList.add('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onGrief() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('shown');
  grief.classList.remove('hidden');
  griefBtn.classList.add('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onALife() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('shown');
  alife.classList.remove('hidden');
  alifeBtn.classList.add('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onSchool() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('shown');
  school.classList.remove('hidden');
  schoolBtn.classList.add('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onWork() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('shown');
  work.classList.remove('hidden');
  workBtn.classList.add('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onMe() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('shown');
  me.classList.remove('hidden');
  meBtn.classList.add('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onMalnourished() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('shown');
  malnourished.classList.remove('hidden');
  malnourishedBtn.classList.add('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onThingsToPainful() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('shown');
  thingstopainful.classList.remove('hidden');
  thingstopainfulBtn.classList.add('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onDearFutureSelf() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
  fear.classList.add('hidden');
  fear.classList.remove('shown');
  fearBtn.classList.remove('active');
  forgoten.classList.add('hidden');
  forgoten.classList.remove('shown');
  forgotenBtn.classList.remove('active');
  grief.classList.add('hidden');
  grief.classList.remove('shown');
  griefBtn.classList.remove('active');
  alife.classList.add('hidden');
  alife.classList.remove('shown');
  alifeBtn.classList.remove('active');
  school.classList.add('hidden');
  school.classList.remove('shown');
  schoolBtn.classList.remove('active');
  work.classList.add('hidden');
  work.classList.remove('shown');
  workBtn.classList.remove('active');
  me.classList.add('hidden');
  me.classList.remove('shown');
  meBtn.classList.remove('active');
  malnourished.classList.add('hidden');
  malnourished.classList.remove('shown');
  malnourishedBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('shown');
  dearfutureself.classList.remove('hidden');
  dearfutureselfBtn.classList.add('active');
}

/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/

checkMarkOne.addEventListener('click', function() {
  if (checkMarkOnePlace == 'unclicked') {
    addCheck(checkMarkOne);
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    checkMarkOnePlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkOne);
    upperCase = "";
    checkMarkOnePlace = 'unclicked';
    console.log('False')
  }
});

checkMarkTwo.addEventListener('click', function() {
  if (checkMarkTwoPlace == 'unclicked') {
    addCheck(checkMarkTwo);
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    checkMarkTwoPlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkTwo);
    lowerCase = "";
    checkMarkTwoPlace = 'unclicked';
    console.log('False')
  }
});

checkMarkThree.addEventListener('click', function() {
  if (checkMarkThreePlace == 'unclicked') {
    addCheck(checkMarkThree);
    numbers = '0123456789';
    checkMarkThreePlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkThree);
    numbers = "";
    checkMarkThreePlace = 'unclicked';
    console.log('False')
  }
});

checkMarkFour.addEventListener('click', function() {
  if (checkMarkFourPlace == 'unclicked') {
    addCheck(checkMarkFour);
    special = '!@#$%^&*()';
    checkMarkFourPlace = 'clicked';
    console.log('True')
  } else {
    removeCheck(checkMarkFour);
    special = "";
    checkMarkFourPlace = 'unclicked';
    console.log('False')
  }
});

pdwCopyBtn.addEventListener('click', function() {
  var nubContent = document.getElementById("numberSlideTextBox");
  nubContent.select();
  nubContent.setSelectionRange(0, 256)
  document.execCommand("copy", );
  alert('Text has been coppied!');
});
