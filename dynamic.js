
let allCards = document.querySelectorAll('.main-card');

var nextBtn = document.getElementById('next-btn');
var prevBtn = document.getElementById('prev-btn');

var index = 0;


// empty page
function emptyPage (){
    for (let i = 0; i < allCards.length; i++){
        allCards[i].style.display = 'none';
    }
}emptyPage ();

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



// Previous button EventListener ...
prevBtn.addEventListener('click', function (){
    if (index === 0) {
        index =  allCards.length;
    }
    leftShow();
});


// Next button EventListener ...
nextBtn.addEventListener('click', function (){
    if (index === allCards.length - 1) {
        index = -1;

    }
    rightShow();
});

stardefault (); // call  the default function ..
