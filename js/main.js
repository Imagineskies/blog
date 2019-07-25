/* var fixmeTop = $('#mainPoemsMenu').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('#mainPoemsMenu').css({                      // scroll to that element or below it
            position: 'fixed'
        });
    } else {                                   // apply position: static
        $('#mainPoemsMenu').css({                      // if you scroll above it
            position: 'static'
        });
    }

});

*/

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    console.log(aid)
    $('html,body').animate({scrollTop: $(aid).offset().top - 100},1500);
});

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


function onWelcome() {
  var welcome = document.getElementById('sectionWelcome');
  var about = document.getElementById('sectionAbout');
  var contacts = document.getElementById('sectionContacts');
  var welcoalifeBtn = document.getElementById('buttonWelcome');
  var aboutBtn = document.getElementById('buttonAbout');
  var contactsBtn = document.getElementById('buttonContacts');
  welcome.classList.add("shown");
  welcoalifeBtn.classList.add("active");
  welcome.classList.remove("hidden");
  about.classList.add("hidden");
  about.classList.remove("shown");
  aboutBtn.classList.remove("active");
  contacts.classList.add("hidden");
  contacts.classList.remove("shown");
  contactsBtn.classList.remove("active");
}
function onAbout() {
  var welcome = document.getElementById('sectionWelcome');
  var about = document.getElementById('sectionAbout');
  var contacts = document.getElementById('sectionContacts');
  var welcoalifeBtn = document.getElementById('buttonWelcome');
  var aboutBtn = document.getElementById('buttonAbout');
  var contactsBtn = document.getElementById('buttonContacts');
  welcome.classList.add("hidden");
  welcome.classList.remove("shown");
  welcoalifeBtn.classList.remove("active");
  about.classList.add("shown");
  aboutBtn.classList.add("active");
  about.classList.remove("hidden");
  contacts.classList.add("hidden");
  contacts.classList.remove("shown");
  contactsBtn.classList.remove("active");
}
function onContacts() {
  var welcome = document.getElementById('sectionWelcome');
  var about = document.getElementById('sectionAbout');
  var contacts = document.getElementById('sectionContacts');
  var welcoalifeBtn = document.getElementById('buttonWelcome');
  var aboutBtn = document.getElementById('buttonAbout');
  var contactsBtn = document.getElementById('buttonContacts');
  welcome.classList.add("hidden");
  welcome.classList.remove("shown");
  welcoalifeBtn.classList.remove("active");
  about.classList.add("hidden");
  about.classList.remove("shown");
  aboutBtn.classList.remove("active");
  contacts.classList.add("shown");
  contactsBtn.classList.add("active");
  contacts.classList.remove("hidden");
}
function onFear() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onForgoten() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onGrief() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onALife() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onSchool() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onWork() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onKyla() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('shown');
  kyla.classList.remove('hidden');
  kylaBtn.classList.add('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onThingsToPainful() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('shown');
  thingstopainful.classList.remove('hidden');
  thingstopainfulBtn.classList.add('active');
  dearfutureself.classList.add('hidden');
  dearfutureself.classList.remove('shown');
  dearfutureselfBtn.classList.remove('active');
}
function onDearFutureSelf() {
  var fear = document.getElementById('sectionFear');
  var forgoten = document.getElementById('sectionForgoten');
  var grief = document.getElementById('sectionGrief');
  var alife = document.getElementById('sectionALife');
  var school = document.getElementById('sectionSchool');
  var work = document.getElementById('sectionWork');
  var kyla = document.getElementById('sectionKyla');
  var thingstopainful = document.getElementById('sectionThingsToPainful');
  var dearfutureself = document.getElementById('sectionDearFutureSelf');
  var fearBtn = document.getElementById('buttonFear');
  var forgotenBtn = document.getElementById('buttonForgoten');
  var griefBtn = document.getElementById('buttonGrief');
  var alifeBtn = document.getElementById('buttonALife');
  var schoolBtn = document.getElementById('buttonSchool');
  var workBtn = document.getElementById('buttonWork');
  var kylaBtn = document.getElementById('buttonKyla');
  var thingstopainfulBtn = document.getElementById('buttonThingsToPainful');
  var dearfutureselfBtn = document.getElementById('buttonDearFutureSelf');
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
  kyla.classList.add('hidden');
  kyla.classList.remove('shown');
  kylaBtn.classList.remove('active');
  thingstopainful.classList.add('hidden');
  thingstopainful.classList.remove('shown');
  thingstopainfulBtn.classList.remove('active');
  dearfutureself.classList.add('shown');
  dearfutureself.classList.remove('hidden');
  dearfutureselfBtn.classList.add('active');
}

function onDescription() {
  var description = document.getElementById('sectionDescription');
  var halo = document.getElementById('sectionHalo');
  var callofduty = document.getElementById('sectionCallOfDuty');
  var overwatch = document.getElementById('sectionOverwatch');
  var bioshock = document.getElementById('sectionBioShock');
  var descriptionBtn = document.getElementById('buttonDescription');
  var haloBtn = document.getElementById('buttonHalo');
  var callofdutyBtn = document.getElementById('buttonCallOfDuty');
  var overwatchBtn = document.getElementById('buttonOverwatch');
  var bioshockBtn = document.getElementById('buttonBioShock');
  description.classList.add('shown');
  description.classList.remove('hidden');
  descriptionBtn.classList.add('active');
  halo.classList.add('hidden');
  halo.classList.remove('shown');
  haloBtn.classList.remove('active');
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
function onHalo() {
  var description = document.getElementById('sectionDescription');
  var halo = document.getElementById('sectionHalo');
  var callofduty = document.getElementById('sectionCallOfDuty');
  var overwatch = document.getElementById('sectionOverwatch');
  var bioshock = document.getElementById('sectionBioShock');
  var descriptionBtn = document.getElementById('buttonDescription');
  var haloBtn = document.getElementById('buttonHalo');
  var callofdutyBtn = document.getElementById('buttonCallOfDuty');
  var overwatchBtn = document.getElementById('buttonOverwatch');
  var bioshockBtn = document.getElementById('buttonBioShock');
  description.classList.add('hidden');
  description.classList.remove('shown');
  descriptionBtn.classList.remove('active');
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
  var description = document.getElementById('sectionDescription');
  var halo = document.getElementById('sectionHalo');
  var callofduty = document.getElementById('sectionCallOfDuty');
  var overwatch = document.getElementById('sectionOverwatch');
  var bioshock = document.getElementById('sectionBioShock');
  var descriptionBtn = document.getElementById('buttonDescription');
  var haloBtn = document.getElementById('buttonHalo');
  var callofdutyBtn = document.getElementById('buttonCallOfDuty');
  var overwatchBtn = document.getElementById('buttonOverwatch');
  var bioshockBtn = document.getElementById('buttonBioShock');
  description.classList.add('hidden');
  description.classList.remove('shown');
  descriptionBtn.classList.remove('active');
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
  var description = document.getElementById('sectionDescription');
  var halo = document.getElementById('sectionHalo');
  var callofduty = document.getElementById('sectionCallOfDuty');
  var overwatch = document.getElementById('sectionOverwatch');
  var bioshock = document.getElementById('sectionBioShock');
  var descriptionBtn = document.getElementById('buttonDescription');
  var haloBtn = document.getElementById('buttonHalo');
  var callofdutyBtn = document.getElementById('buttonCallOfDuty');
  var overwatchBtn = document.getElementById('buttonOverwatch');
  var bioshockBtn = document.getElementById('buttonBioShock');
  description.classList.add('hidden');
  description.classList.remove('shown');
  descriptionBtn.classList.remove('active');
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
  var description = document.getElementById('sectionDescription');
  var halo = document.getElementById('sectionHalo');
  var callofduty = document.getElementById('sectionCallOfDuty');
  var overwatch = document.getElementById('sectionOverwatch');
  var bioshock = document.getElementById('sectionBioShock');
  var descriptionBtn = document.getElementById('buttonDescription');
  var haloBtn = document.getElementById('buttonHalo');
  var callofdutyBtn = document.getElementById('buttonCallOfDuty');
  var overwatchBtn = document.getElementById('buttonOverwatch');
  var bioshockBtn = document.getElementById('buttonBioShock');
  description.classList.add('hidden');
  description.classList.remove('shown');
  descriptionBtn.classList.remove('active');
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
  var walkthroughs = document.getElementById('sectionHaloWalkthroughs');
  var mapweapons = document.getElementById('sectionHaloMW');
  var haloetc = document.getElementById('sectionHaloEtc');
  var walkthroughsBtn = document.getElementById('buttonHaloWalkthroughs');
  var mapweaponsBtn = document.getElementById('buttonHaloMW');
  var haloetcBtn = document.getElementById('buttonHaloEtc');
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
  var walkthroughs = document.getElementById('sectionHaloWalkthroughs');
  var mapweapons = document.getElementById('sectionHaloMW');
  var haloetc = document.getElementById('sectionHaloEtc');
  var walkthroughsBtn = document.getElementById('buttonHaloWalkthroughs');
  var mapweaponsBtn = document.getElementById('buttonHaloMW');
  var haloetcBtn = document.getElementById('buttonHaloEtc');
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
  var walkthroughs = document.getElementById('sectionHaloWalkthroughs');
  var mapweapons = document.getElementById('sectionHaloMW');
  var haloetc = document.getElementById('sectionHaloEtc');
  var walkthroughsBtn = document.getElementById('buttonHaloWalkthroughs');
  var mapweaponsBtn = document.getElementById('buttonHaloMW');
  var haloetcBtn = document.getElementById('buttonHaloEtc');
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
