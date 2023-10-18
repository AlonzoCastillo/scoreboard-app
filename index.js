let home = document.getElementById("home")
let guest = document.getElementById("guest")

score1 = 0
score2 = 0 

// Team A -- Trying to figure out how to consolidate my code to only have 1 function but for both teams. Also to have them not affect both sides, rather affect each one individually. 
function plusOneTeamA(){
    score1 += 1
    home.textContent = score1
}

function plusTwoTeamA(){
    score1 += 2
    home.textContent = score1
}

function plusThreeTeamA(){
    score1 += 3
    home.textContent = score1
}

// Team B - again how would i consolidate the code to only affect 1 side with just one function? 
function plusOneTeamB(){
    score2 += 1
    guest.textContent = score2
}

function plusTwoTeamB(){
    score2 += 2
    guest.textContent = score2
}

function plusThreeTeamB(){
    score2 += 3
    guest.textContent = score2
}

function newGame(){
    home.textContent = 0 
    guest.textContent = 0 
    score1 = 0
    score2 = 0 
}
