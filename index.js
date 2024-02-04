let homeScore = document.getElementById("home-score");
let homeTotal = 0;

function addOnePointHome() {
    homeTotal = homeTotal + 1;
    homeScore.innerText = homeTotal;
};

function addTwoPointHome() {
    homeTotal = homeTotal + 2;
    homeScore.innerText = homeTotal;
};

function addThreePointHome() {
    homeTotal = homeTotal + 3;
    homeScore.innerText = homeTotal;
};


let guestScore = document.getElementById("guest-score");
let guestTotal = 0;

function addOnePointGuest() {
    guestTotal = guestTotal + 1;
    guestScore.innerText = guestTotal;
};

function addTwoPointGuest() {
    guestTotal = guestTotal + 2;
    guestScore.innerText = guestTotal;
};

function addThreePointGuest() {
    guestTotal = guestTotal + 3;
    guestScore.innerText = guestTotal;
};

function reset() {
    homeTotal = 0;
    guestTotal = 0;
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}
