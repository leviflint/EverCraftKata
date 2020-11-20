import { Character } from "./character.js"

const newCharacter = new Character

function setUserName() {
    
    newCharacter.characterName = prompt("Please enter a character name");
    let name = document.querySelector(".character-name")
    name.innerText = newCharacter.characterName;
    if (newCharacter.characterName === "") {
        newCharacter.characterName = "user" + Math.floor(Math.random() * 10000);
        name.innerText = newCharacter.characterName;
    }
}

let evilAlignment = document.getElementById("evil-alignment")
let neutralAlignment = document.getElementById("neutral-alignment")
let goodAlignment = document.getElementById("good-alignment")
let characterAlignment = document.getElementById("character-alignment")

evilAlignment.addEventListener('click', () => {
    newCharacter.characterAlignment = "Evil"
    characterAlignment.innerText = newCharacter.characterAlignment
    evilAlignment.style.display = "none"
    neutralAlignment.style.display = "none"
    goodAlignment.style.display = "none"
})

neutralAlignment.addEventListener('click', () => {
    newCharacter.characterAlignment = "Neutral"
    characterAlignment.innerText = newCharacter.characterAlignment
    evilAlignment.style.display = "none"
    neutralAlignment.style.display = "none"
    goodAlignment.style.display = "none"
})

goodAlignment.addEventListener('click', () => {
    newCharacter.characterAlignment = "Good"
    characterAlignment.innerText = newCharacter.characterAlignment
    evilAlignment.style.display = "none"
    neutralAlignment.style.display = "none"
    goodAlignment.style.display = "none"
})

function rollDice() {
    let diceRoll = Math.floor((Math.random() * 20) + 1);
    return diceRoll
}

setUserName()
