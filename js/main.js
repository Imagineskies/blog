/* Top Priority */

window.onload = function() {
  var content = document.getElementById('content');
  var mainNav = document.getElementById('menuTemp');
  var textOne = document.getElementById('textOne');
  var textTwo = document.getElementById('textTwo');
  content.classList.remove('hidden');
  mainNav.classList.remove('hidden');
  textOne.classList.remove('hidden');
  textTwo.classList.add('hidden');
}

/* Var */
var fear = document.getElementById('sectionFear');
var forgoten = document.getElementById('sectionForgoten');
var grief = document.getElementById('sectionGrief');
var alife = document.getElementById('sectionALife');
var school = document.getElementById('sectionSchool');
var work = document.getElementById('sectionWork');
var me = document.getElementById('sectionMe');
var kyla = document.getElementById('sectionKyla');
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
var kylaBtn = document.getElementById('buttonKyla');
var malnourishedBtn = document.getElementById('buttonMalnourished');
var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
var halo = document.getElementById('sectionHalo');
var callofduty = document.getElementById('sectionCallOfDuty');
var overwatch = document.getElementById('sectionOverwatch');
var bioshock = document.getElementById('sectionBioShock');
var haloBtn = document.getElementById('buttonHalo');
var callofdutyBtn = document.getElementById('buttonCallOfDuty');
var overwatchBtn = document.getElementById('buttonOverwatch');
var bioshockBtn = document.getElementById('buttonBioShock');
var walkthroughs = document.getElementById('sectionHaloWalkthroughs');
var mapweapons = document.getElementById('sectionHaloMW');
var haloetc = document.getElementById('sectionHaloEtc');
var walkthroughsBtn = document.getElementById('buttonHaloWalkthroughs');
var mapweaponsBtn = document.getElementById('buttonHaloMW');
var haloetcBtn = document.getElementById('buttonHaloEtc');
var numberSlideRange = $("#numberSlide").val();

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top - 100},1500);
});

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function slideRange() {
  var numberSlideRange = $("#numberSlide").val();
  document.getElementById("thumb").innerHTML = numberSlideRange;
  document.getElementById("numberSlideTextBox").value = makeid(numberSlideRange);
  console.log(makeid(numberSlideRange));
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

function exitPoemsMenu() {
  document.getElementById("mainPoemsMenuM").style.width = "0%";
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
function onKyla() {
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('shown');
  kyla.classList.remove('hidden');
  kylaBtn.classList.add('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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
  me.classList.remove('active');
  meBtn.classList.remove('active');
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
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

function onHalo() {
  halo.classList.add('shown');
  halo.classList.remove('hidden');
  haloBtn.classList.add('active');
  callofduty.classList.add('hidden');
  callofduty.classList.remove('shown');
  callofdutyBtn.classList.remove('active');
  overwatch.classList.add('hidden');
  overwatch.classList.remove('shown');
  overwatchBtn.classList.remove('active');
  bioshock.classList.add('hidden');
  bioshock.classList.remove('shown');
  bioshockBtn.classList.remove('active');
}
function onCallOfDuty() {
  halo.classList.add('hidden');
  halo.classList.remove('shown');
  haloBtn.classList.remove('active');
  callofduty.classList.add('shown');
  callofduty.classList.remove('hidden');
  callofdutyBtn.classList.add('active');
  overwatch.classList.add('hidden');
  overwatch.classList.remove('shown');
  overwatchBtn.classList.remove('active');
  bioshock.classList.add('hidden');
  bioshock.classList.remove('shown');
  bioshockBtn.classList.remove('active');
}
function onOverwatch() {
  halo.classList.add('hidden');
  halo.classList.remove('shown');
  haloBtn.classList.remove('active');
  callofduty.classList.add('hidden');
  callofduty.classList.remove('shown');
  callofdutyBtn.classList.remove('active');
  overwatch.classList.add('shown');
  overwatch.classList.remove('hidden');
  overwatchBtn.classList.add('active');
  bioshock.classList.add('hidden');
  bioshock.classList.remove('shown');
  bioshockBtn.classList.remove('active');
}
function onBioShock() {
  halo.classList.add('hidden');
  halo.classList.remove('shown');
  haloBtn.classList.remove('active');
  callofduty.classList.add('hidden');
  callofduty.classList.remove('shown');
  callofdutyBtn.classList.remove('active');
  overwatch.classList.add('hidden');
  overwatch.classList.remove('shown');
  overwatchBtn.classList.remove('active');
  bioshock.classList.add('shown');
  bioshock.classList.remove('hidden');
  bioshockBtn.classList.add('active');
}
function onHaloWalkthroughs() {
  walkthroughs.classList.add('shown');
  walkthroughs.classList.remove('hidden');
  walkthroughsBtn.classList.add('active');
  mapweapons.classList.add('hidden');
  mapweapons.classList.remove('shown');
  mapweaponsBtn.classList.remove('active');
  haloetc.classList.add('hidden');
  haloetc.classList.remove('shown');
  haloetcBtn.classList.remove('active');

}
function onHaloMW() {
  walkthroughs.classList.add('hidden');
  walkthroughs.classList.remove('shown');
  walkthroughsBtn.classList.remove('active');
  mapweapons.classList.add('shown');
  mapweapons.classList.remove('hidden');
  mapweaponsBtn.classList.add('active');
  haloetc.classList.add('hidden');
  haloetc.classList.remove('shown');
  haloetcBtn.classList.remove('active');
}
function onHaloEtc() {
  walkthroughs.classList.add('hidden');
  walkthroughs.classList.remove('shown');
  walkthroughsBtn.classList.remove('active');
  mapweapons.classList.add('hidden');
  mapweapons.classList.remove('shown');
  mapweaponsBtn.classList.remove('active');
  haloetc.classList.add('shown');
  haloetc.classList.remove('hidden');
  haloetcBtn.classList.add('active');
}
