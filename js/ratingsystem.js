/* Var */

var stars = [
    {star: 1, starChecked: false},
    {star: 2, starChecked: false},
    {star: 3, starChecked: false},
    {star: 4, starChecked: false},
    {star: 5, starChecked: false},
 ];

 console.log(stars)

var starWrapper = document.getElementById('rating-system');

var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');


var star1full = document.getElementById('star1').getElementsByClassName('fas')[0];
var star2full = document.getElementById('star2').getElementsByClassName('fas')[0];
var star3full = document.getElementById('star3').getElementsByClassName('fas')[0];
var star4full = document.getElementById('star4').getElementsByClassName('fas')[0];
var star5full = document.getElementById('star5').getElementsByClassName('fas')[0];


var star1empty = document.getElementById('star1').getElementsByClassName('far')[0];
var star2empty = document.getElementById('star2').getElementsByClassName('far')[0];
var star3empty = document.getElementById('star3').getElementsByClassName('far')[0];
var star4empty = document.getElementById('star4').getElementsByClassName('far')[0];
var star5empty = document.getElementById('star5').getElementsByClassName('far')[0];


function emptyAllStars() {
  star1full.style.display = 'none';
  star1full.style.visibility = 'hidden';
  star1empty.style.display = 'block';
  star1empty.style.visibility = 'visible';
  star2full.style.display = 'none';
  star2full.style.visibility = 'hidden';
  star2empty.style.display = 'block';
  star2empty.style.visibility = 'visible';
  star3full.style.display = 'none';
  star3full.style.visibility = 'hidden';
  star3empty.style.display = 'block';
  star3empty.style.visibility = 'visible';
  star4full.style.display = 'none';
  star4full.style.visibility = 'hidden';
  star4empty.style.display = 'block';
  star4empty.style.visibility = 'visible';
  star5full.style.display = 'none';
  star5full.style.visibility = 'hidden';
  star5empty.style.display = 'block';
  star5empty.style.visibility = 'visible';
}

function checkStarOne() {
    star1full.style.display = 'block';
    star1full.style.visibility = 'visible';
    star1empty.style.display = 'none';
    star1empty.style.visibility = 'hidden';
}

function checkStarTwo() {
    star1full.style.display = 'block';
    star1full.style.visibility = 'visible';
    star1empty.style.display = 'none';
    star1empty.style.visibility = 'hidden';
    star2full.style.display = 'block';
    star2full.style.visibility = 'visible';
    star2empty.style.display = 'none';
    star2empty.style.visibility = 'hidden';
}

function checkStarThree() {
    star1full.style.display = 'block';
    star1full.style.visibility = 'visible';
    star1empty.style.display = 'none';
    star1empty.style.visibility = 'hidden';
    star2full.style.display = 'block';
    star2full.style.visibility = 'visible';
    star2empty.style.display = 'none';
    star2empty.style.visibility = 'hidden';
    star3full.style.display = 'block';
    star3full.style.visibility = 'visible';
    star3empty.style.display = 'none';
    star3empty.style.visibility = 'hidden';
}

function checkStarFour() {
    star1full.style.display = 'block';
    star1full.style.visibility = 'visible';
    star1empty.style.display = 'none';
    star1empty.style.visibility = 'hidden';
    star2full.style.display = 'block';
    star2full.style.visibility = 'visible';
    star2empty.style.display = 'none';
    star2empty.style.visibility = 'hidden';
    star3full.style.display = 'block';
    star3full.style.visibility = 'visible';
    star3empty.style.display = 'none';
    star3empty.style.visibility = 'hidden';
    star4full.style.display = 'block';
    star4full.style.visibility = 'visible';
    star4empty.style.display = 'none';
    star4empty.style.visibility = 'hidden';
}

function checkStarFive() {
    star1full.style.display = 'block';
    star1full.style.visibility = 'visible';
    star1empty.style.display = 'none';
    star1empty.style.visibility = 'hidden';
    star2full.style.display = 'block';
    star2full.style.visibility = 'visible';
    star2empty.style.display = 'none';
    star2empty.style.visibility = 'hidden';
    star3full.style.display = 'block';
    star3full.style.visibility = 'visible';
    star3empty.style.display = 'none';
    star3empty.style.visibility = 'hidden';
    star4full.style.display = 'block';
    star4full.style.visibility = 'visible';
    star4empty.style.display = 'none';
    star4empty.style.visibility = 'hidden';
    star5full.style.display = 'block';
    star5full.style.visibility = 'visible';
    star5empty.style.display = 'none';
    star5empty.style.visibility = 'hidden';
}

function StarCheckAfter() {
  if (stars[0].starChecked = true) {
    checkStarOne();
  }
  else if (stars[1].starChecked = true) {
    checkStarTwo();
  }
  else if (star[2].starChecked = true) {
    checkStarThree();
  }
  else if (stars[3].starChecked = true) {
    checkStarFour();
  }
  else if (stars[4].starChecked = true) {
    checkStarFive();
  }
}

function StarCheckLeave(){
    for (var i=0; i < stars.length; i++) {
        if (stars[i].starChecked == 'true') {
          return stars[i];
          console.log("One of the stars has been clicked");
          StarCheckAfter();
          break;
        } else {
          console.log("None of the stars have been clicked");
          emptyAllStars();
        }
    }
};


function fillStarOne() {
  star1full.style.display = 'block';
  star1full.style.visibility = 'visible';
  star1empty.style.display = 'none';
  star1empty.style.visibility = 'hidden';
}

function fillStarTwo() {
  star1full.style.display = 'block';
  star1full.style.visibility = 'visible';
  star1empty.style.display = 'none';
  star1empty.style.visibility = 'hidden';
  star2full.style.display = 'block';
  star2full.style.visibility = 'visible';
  star2empty.style.display = 'none';
  star2empty.style.visibility = 'hidden';
}

function fillStarThree() {
  star1full.style.display = 'block';
  star1full.style.visibility = 'visible';
  star1empty.style.display = 'none';
  star1empty.style.visibility = 'hidden';
  star2full.style.display = 'block';
  star2full.style.visibility = 'visible';
  star2empty.style.display = 'none';
  star2empty.style.visibility = 'hidden';
  star3full.style.display = 'block';
  star3full.style.visibility = 'visible';
  star3empty.style.display = 'none';
  star3empty.style.visibility = 'hidden';
}

function fillStarFour() {
  star1full.style.display = 'block';
  star1full.style.visibility = 'visible';
  star1empty.style.display = 'none';
  star1empty.style.visibility = 'hidden';
  star2full.style.display = 'block';
  star2full.style.visibility = 'visible';
  star2empty.style.display = 'none';
  star2empty.style.visibility = 'hidden';
  star3full.style.display = 'block';
  star3full.style.visibility = 'visible';
  star3empty.style.display = 'none';
  star3empty.style.visibility = 'hidden';
  star4full.style.display = 'block';
  star4full.style.visibility = 'visible';
  star4empty.style.display = 'none';
  star4empty.style.visibility = 'hidden';
}

function fillStarFive() {
  star1full.style.display = 'block';
  star1full.style.visibility = 'visible';
  star1empty.style.display = 'none';
  star1empty.style.visibility = 'hidden';
  star2full.style.display = 'block';
  star2full.style.visibility = 'visible';
  star2empty.style.display = 'none';
  star2empty.style.visibility = 'hidden';
  star3full.style.display = 'block';
  star3full.style.visibility = 'visible';
  star3empty.style.display = 'none';
  star3empty.style.visibility = 'hidden';
  star4full.style.display = 'block';
  star4full.style.visibility = 'visible';
  star4empty.style.display = 'none';
  star4empty.style.visibility = 'hidden';
  star5full.style.display = 'block';
  star5full.style.visibility = 'visible';
  star5empty.style.display = 'none';
  star5empty.style.visibility = 'hidden';
}

/* Empty Stars */

star1.addEventListener('mouseleave', function empty() {
  StarCheckLeave();
});
star2.addEventListener('mouseleave', function empty() {
  StarCheckLeave();
});
star3.addEventListener('mouseleave', function empty() {
  StarCheckLeave();
});
star4.addEventListener('mouseleave', function empty() {
  StarCheckLeave();
});
star5.addEventListener('mouseleave', function empty() {
  StarCheckLeave();
});

/* Fill Stars */

star1.addEventListener('mouseenter', function one() {
  fillStarOne();
});

star2.addEventListener('mouseenter', function one() {
  fillStarTwo();
});
star3.addEventListener('mouseenter', function one() {
  fillStarThree();
});
star4.addEventListener('mouseenter', function one() {
  fillStarFour();
});
star5.addEventListener('mouseenter', function one() {
  fillStarFive();
});

/* Look For Clicks */


star1.addEventListener('click', function one() {
  stars[0].starChecked = true;
  StarCheckLeave()
  console.log(stars);
});
star2.addEventListener('click', function one() {
  stars[1].starChecked = true;
  StarCheckLeave()
  console.log(stars);
});
star3.addEventListener('click', function one() {
  stars[2].starChecked = true;
  StarCheckLeave()
  console.log(stars);
});
star4.addEventListener('click', function one() {
  stars[3].starChecked = true;
  StarCheckLeave()
  console.log(stars);
});
star5.addEventListener('click', function one() {
  stars[4].starChecked = true;
  StarCheckLeave()
  console.log(stars);
});
