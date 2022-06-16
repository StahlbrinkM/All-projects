const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0


function addScoreHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addScoreHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addScoreHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addScoreGuestOne() {
   guestScore += 1
   guestScoreEl.textContent = guestScore
}

function addScoreGuestTwo() {
   guestScore += 2
   guestScoreEl.textContent = guestScore
}

function addScoreGuestThree() {
   guestScore += 3
   guestScoreEl.textContent = guestScore
}

function startNewGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}