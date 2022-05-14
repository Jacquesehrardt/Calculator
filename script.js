const buttonOne = document.getElementById("buttonOne")
const buttonTwo = document.getElementById("buttonTwo")
const buttonThree = document.getElementById("buttonThree")
const buttonFour = document.getElementById("buttonFour")
const buttonFive = document.getElementById("buttonFive")
const buttonSix = document.getElementById("buttonSix")
const buttonSeven = document.getElementById("buttonSeven")
const buttonEight = document.getElementById("buttonEight")
const buttonNine = document.getElementById("buttonNine")
const buttonZero = document.getElementById("buttonZero")
const buttonPlus = document.getElementById("buttonPlus")
const content = document.getElementById("content")
const eraser = document.getElementById("eraser")

buttonOne.addEventListener('click', function one(){
    content.innerHTML += "1"
})

buttonTwo.addEventListener('click', function two(){
    content.innerHTML += "2"
})

buttonThree.addEventListener('click', function teste(){
    content.innerHTML += "3"
})

buttonFour.addEventListener('click', function teste(){
    content.innerHTML += "4"
})

buttonFive.addEventListener('click', function teste(){
    content.innerHTML += "5"
})

buttonSix.addEventListener('click', function teste(){
    content.innerHTML += "6"
})

buttonSeven.addEventListener('click', function teste(){
    content.innerHTML += "7"
})

buttonEight.addEventListener('click', function teste(){
    content.innerHTML += "8"
})

buttonNine.addEventListener('click', function teste(){
    content.innerHTML += "9"
})

buttonZero.addEventListener('click', function teste(){
    content.innerHTML += "0"
})

buttonPlus.addEventListener('click', function teste(){
    content.innerHTML += "+"
})

eraser.addEventListener('click', function teste(){
    content.innerHTML = ""
})