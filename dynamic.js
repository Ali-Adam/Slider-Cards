
let allCards = document.querySelectorAll('.main-card');

var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');

var index = 0;


// empty page
function emptyPage (){
    for (let i = 0; i < allCards.length; i++){
        allCards[i].style.display = 'none';
    }
}

// default page ...
function stardefault () {
    emptyPage();
    allCards[0].style.display = 'inline-block';
}

//****************

// show the right side ...
function rightShow () {
    emptyPage ();
    allCards[index + 1].style.display = 'inline-block';
    index ++;
}

// show the leftside ...
function leftShow () {
    emptyPage ();
    allCards[index - 1].style.display = 'inline-block';
    index --;
}

//***********************

// call the previous card when click on prev ...
 prevBtn.addEventListener('click', () => {
     index = (index === 0) ? index = allCards.length : index ;

     leftShow();
   });


// call the next card when click on next ...
nextBtn.addEventListener('click', function () {
     (index === allCards.length-1 ) ? index = -1 : index ;

     rightShow();
   });


stardefault (); // call  the default function ..
