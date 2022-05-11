//Conversion
let metersToFeet = document.getElementById("meters-to-feet")
let feetToMeter = document.getElementById("feet-to-meter")
let literToGallon = document.getElementById("liter-to-gallon")
let gallonToLiter = document.getElementById("gallon-to-liter")
let kilosToPounds = document.getElementById("kilos-to-pounds")
let poundsToKilos = document.getElementById("pounds-to-kilos")


//base 1:1 calculations
let meterToFt = 3.280
let ftToMeter = 0.304
let literToGal = 0.264
let galToLiter = 3.785
let kgToPounds = 2.204
let poundsToKg = 0.453


//number changes
let meterNumber = document.getElementById("m-number")
let ftNumber = document.getElementById("ft-number")

let literNumber = document.getElementById("liter-number")
let gallonNumber = document.getElementById("gallon-number")

let kiloNumber = document.getElementById("kilo-number")
let poundNumber = document.getElementById("pound-number")

//function
function meterConversion() {

//calculations based on user input
    metersToFeet.textContent = meterToFt * document.getElementById("header-number").value 
    feetToMeter.textContent = ftToMeter * document.getElementById("header-number").value
    literToGallon.textContent = literToGal * document.getElementById("header-number").value
    gallonToLiter.textContent = galToLiter * document.getElementById("header-number").value
    kilosToPounds.textContent = kgToPounds * document.getElementById("header-number").value
    poundsToKilos.textContent = poundsToKg * document.getElementById("header-number").value

//changing the numbers 
    meterNumber.textContent = document.getElementById("header-number").value
    ftNumber.textContent = document.getElementById("header-number").value

    literNumber.textContent = document.getElementById("header-number").value
    gallonNumber.textContent = document.getElementById("header-number").value

    kiloNumber.textContent = document.getElementById("header-number").value
    poundNumber.textContent = document.getElementById("header-number").value
}

meterConversion()




