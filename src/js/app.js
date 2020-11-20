import { Character } from "./character.js"

const newCharacter = new Character
let evilAlignment = document.getElementById("evil-alignment")
let neutralAlignment = document.getElementById("neutral-alignment")
let goodAlignment = document.getElementById("good-alignment")
let characterAlignment = document.getElementById("character-alignment")
let characterArmor = document.querySelector(".character-armor")
let characterHealth = document.querySelector(".character-health")
let characterStrength = document.querySelector(".character-strength")
let characterDexterity = document.querySelector(".character-dexterity")
let characterConstitution = document.querySelector(".character-constitution")
let characterWisdom = document.querySelector(".character-wisdom")
let characterIntelligence = document.querySelector(".character-intelligence")
let characterCharisma = document.querySelector(".character-charisma")

function setUserName() {
    newCharacter.characterName = prompt("Please enter a character name");
    let name = document.querySelector(".character-name")
    name.innerText = newCharacter.characterName;
    if (newCharacter.characterName === "") {
        newCharacter.characterName = "user" + Math.floor(Math.random() * 10000);
        name.innerText = newCharacter.characterName;
    }
    evilAlignment.style.display = "inherit"
    neutralAlignment.style.display = "inherit"
    goodAlignment.style.display = "inherit"
}



evilAlignment.addEventListener('click', () => {
    newCharacter.characterAlignment = "Evil"
    characterAlignment.innerText = newCharacter.characterAlignment
    evilAlignment.style.display = "none"
    neutralAlignment.style.display = "none"
    goodAlignment.style.display = "none"
    newCharacter.rollStrength();
    newCharacter.rollDexterity();
    newCharacter.rollConstitution();
    newCharacter.rollWisdom();
    newCharacter.rollIntelligence();
    newCharacter.rollCharisma();
    characterArmor.style.display = "inherit"
    characterHealth.style.display = "inherit"
    characterStrength.style.display = "inherit"
    characterDexterity.style.display = "inherit"
    characterConstitution.style.display = "inherit"
    characterWisdom.style.display = "inherit"
    characterIntelligence.style.display = "inherit"
    characterCharisma.style.display = "inherit"
})

neutralAlignment.addEventListener('click', () => {
    newCharacter.characterAlignment = "Neutral"
    characterAlignment.innerText = newCharacter.characterAlignment
    evilAlignment.style.display = "none"
    neutralAlignment.style.display = "none"
    goodAlignment.style.display = "none"
    newCharacter.rollStrength();
    newCharacter.rollDexterity();
    newCharacter.rollConstitution();
    newCharacter.rollWisdom();
    newCharacter.rollIntelligence();
    newCharacter.rollCharisma();
    characterArmor.style.display = "inherit"
    characterHealth.style.display = "inherit"
    characterStrength.style.display = "inherit"
    characterDexterity.style.display = "inherit"
    characterConstitution.style.display = "inherit"
    characterWisdom.style.display = "inherit"
    characterIntelligence.style.display = "inherit"
    characterCharisma.style.display = "inherit"
})

goodAlignment.addEventListener('click', () => {
    newCharacter.characterAlignment = "Good"
    characterAlignment.innerText = newCharacter.characterAlignment
    evilAlignment.style.display = "none"
    neutralAlignment.style.display = "none"
    goodAlignment.style.display = "none"
    newCharacter.rollStrength();
    newCharacter.rollDexterity();
    newCharacter.rollConstitution();
    newCharacter.rollWisdom();
    newCharacter.rollIntelligence();
    newCharacter.rollCharisma();
    characterArmor.style.display = "inherit"
    characterHealth.style.display = "inherit"
    characterStrength.style.display = "inherit"
    characterDexterity.style.display = "inherit"
    characterConstitution.style.display = "inherit"
    characterWisdom.style.display = "inherit"
    characterIntelligence.style.display = "inherit"
    characterCharisma.style.display = "inherit"
})

function rollDice() {
    let diceRoll = Math.floor((Math.random() * 20) + 1);
    return diceRoll
}

setUserName()
