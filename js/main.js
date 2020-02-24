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
var nudity = document.getElementById('sectionNudity');
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
var nudityBtn = document.getElementById('buttonNudity');
var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
var pdwCopyBtn = document.getElementById('pdwCopy');
var numberSlideRange = $("#numberSlide").val();
var techMenuTemp = document.getElementById('techMenuTemp');
var techMenuValue = 0;
var poemBody = document.getElementById('poemBody');
var formRecTextbox = document.getElementById('formRecTextbox');
var checkMarkOnePlace = 'clicked';
var checkMarkTwoPlace = 'clicked';
var checkMarkThreePlace = 'unclicked';
var checkMarkFourPlace = 'unclicked';
var checkMarkFivePlace = 'unclicked';
var checkMarkSixPlace = 'unclicked';
var base64Place = 'encode';
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "";
var special = "";

// Constants
const checkMarkOne = document.querySelector('#checkMarkOne');
const checkMarkTwo = document.querySelector('#checkMarkTwo');
const checkMarkThree = document.querySelector('#checkMarkThree');
const checkMarkFour = document.querySelector('#checkMarkFour');
const checkMarkFive = document.querySelector('#checkMarkFive');
const checkMarkSix = document.querySelector('#checkMarkSix');
var gameSubMenuTop = document.getElementById('#gameSubMenuTop')
const base64ConvertBtn = document.getElementById('base64ConvertButton');
const base64Title = document.getElementById('base64Title');
const base64Output = document.getElementById("base64EncodeTextBoxEnd");
const base64Input = document.getElementById("base64EncodeTextBoxStart");

/*
____________________________________________________________________________________
Functions
____________________________________________________________________________________
*/

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});

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

function base64Convertion() {
  if (base64Place == 'encode') {
    // Encodes text to base64
    base64Output.value = btoa(base64Input.value);
  } else {
    // Decodes text to base64
    base64Output.value = atob(base64Input.value);
  }
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}

function onNudity() {
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
  nudity.classList.add('shown');
  nudity.classList.remove('hidden');
  nudityBtn.classList.add('active');
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
  nudity.classList.add('hidden');
  nudity.classList.remove('shown');
  nudityBtn.classList.remove('active');
  dearfutureself.classList.add('shown');
  dearfutureself.classList.remove('hidden');
  dearfutureselfBtn.classList.add('active');
}

/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/


// https://stackoverflow.com/a/31223774
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st >= 850){
     gameSubMenuTop.classList.add('position-fixed');
     gameSubMenuTop.ClassList.remove('sticky-top');
     console.log('Below')
   } else {
     gameSubMenuTop.classList.add('sticky-top');
     gameSubMenuTop.ClassList.remove('position-fixed');
     console.log('Above')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

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

// 5 is encode, 6 is decode

checkMarkFive.addEventListener('click', function() {
  checkMarkSix.classList.remove('checkMarkFull');
  checkMarkSix.classList.add('checkMarkEmpty');
  checkMarkFive.classList.add('checkMarkFull');
  checkMarkFive.classList.remove('checkMarkEmpty');
  base64Title.innerHTML = 'Base 64 Encoder';
  base64Place = 'encode';
});

checkMarkSix.addEventListener('click', function() {
  checkMarkSix.classList.add('checkMarkFull');
  checkMarkSix.classList.remove('checkMarkEmpty');
  checkMarkFive.classList.remove('checkMarkFull');
  checkMarkFive.classList.add('checkMarkEmpty');
  base64Title.innerHTML = 'Base 64 Decoder';
  base64Place = 'decode';
});

pdwCopyBtn.addEventListener('click', function() {
  var nubContent = document.getElementById("numberSlideTextBox");
  nubContent.select();
  nubContent.setSelectionRange(0, 256)
  document.execCommand("copy", );
  alert('Text has been coppied!');
});
