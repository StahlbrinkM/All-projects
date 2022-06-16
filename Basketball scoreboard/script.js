const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

const homeScoreDisplay = document.getElementById("home-score-container")
const guestScoreDisplay = document.getElementById("guest-score-container")

/* ---- OLD CODE ----

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
*/

// ---- NEW CODE ----

// ---- Adding Scores ----

function addScoreHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function addScoreGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    highlightLeader()
}


// ---- New game function ----

function startNewGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeScoreDisplay.classList.remove('highlight')
    guestScoreDisplay.classList.remove('highlight') 
}

// ---- Highlighting  the leader ----

function highlightLeader() {
    if (homeScore > guestScore) {
        homeScoreDisplay.classList.add("highlight")
        guestScoreDisplay.classList.remove("highlight")
    } else if (guestScore > homeScore) {
        guestScoreDisplay.classList.add("highlight")
        homeScoreDisplay.classList.remove("highlight")
    } else {
        homeScoreDisplay.classList.remove("highlight")
        guestScoreDisplay.classList.remove("highlight")
    }
}