import { Character } from "./character.js";
import { Opponent } from "./opponent.js";

const newCharacter = new Character();
const evilAlignment = document.getElementById("evil-alignment");
const neutralAlignment = document.getElementById("neutral-alignment");
const goodAlignment = document.getElementById("good-alignment");
const characterAlignment = document.getElementById("character-alignment");
const characterArmor = document.querySelector(".character-armor");
const characterHealth = document.querySelector(".character-health");
const characterStrength = document.querySelector(".character-strength");
const characterDexterity = document.querySelector(".character-dexterity");
const characterConstitution = document.querySelector(".character-constitution");
const characterWisdom = document.querySelector(".character-wisdom");
const characterIntelligence = document.querySelector(".character-intelligence");
const characterCharisma = document.querySelector(".character-charisma");
const nameInput = document.getElementById("character-name-input");


nameInput.addEventListener("keydown", function(event) {
  if (event.code === 'Enter') {
    let name = document.querySelector(".character-name");
    let nameInputValue = document.querySelector(".character-name-input").value;
    if (nameInputValue === "") {
      newCharacter.characterName = "user" + Math.floor(Math.random() * 10000);
      name.innerText = newCharacter.characterName;
    } else {
    newCharacter.characterName = nameInputValue;
    name.innerText = newCharacter.characterName;
    nameInput.style.display = "none";
    name.style.display = "inherit";
    characterAlignment.style.display = "inherit";
    evilAlignment.style.display = "inherit";
    neutralAlignment.style.display = "inherit";
    goodAlignment.style.display = "inherit";
    }
  }
})

evilAlignment.addEventListener("click", () => {
  newCharacter.characterAlignment = "Evil";
  characterAlignment.innerText = newCharacter.characterAlignment;
  characterAlignment.style.color = "rgb(212, 212, 212)"
  evilAlignment.style.display = "none";
  neutralAlignment.style.display = "none";
  goodAlignment.style.display = "none";
  newCharacter.rollStrength();
  newCharacter.rollDexterity();
  newCharacter.rollConstitution();
  newCharacter.rollWisdom();
  newCharacter.rollIntelligence();
  newCharacter.rollCharisma();
  characterArmor.style.display = "inherit";
  setTimeout(() => {
    characterHealth.style.display = "inherit";
  }, 200);
  setTimeout(() => {
    characterStrength.style.display = "inherit";
  }, 400);
  setTimeout(() => {
    characterDexterity.style.display = "inherit";
  }, 600);
  setTimeout(() => {
    characterConstitution.style.display = "inherit";
  }, 800);
  setTimeout(() => {
    characterWisdom.style.display = "inherit";
  }, 1000);
  setTimeout(() => {
    characterIntelligence.style.display = "inherit";
  }, 1200);
  setTimeout(() => {
    characterCharisma.style.display = "inherit";
  }, 1400);
  characterArmor.innerText = `Armor: ${newCharacter.characterArmor}`;
  characterHealth.innerText = `Hit Points: ${newCharacter.characterHitPoints}`;
  characterStrength.innerText = `Strength: ${newCharacter.characterStrength}`;
  characterDexterity.innerText = `Dexterity: ${newCharacter.characterDexterity}`;
  characterConstitution.innerText = `Constitution: ${newCharacter.characterConstitution}`;
  characterWisdom.innerText = `Wisdom: ${newCharacter.characterWisdom}`;
  characterIntelligence.innerText = `Intelligence: ${newCharacter.characterIntelligence}`;
  characterCharisma.innerText = `Charisma: ${newCharacter.characterCharisma}`;
});

neutralAlignment.addEventListener("click", () => {
  newCharacter.characterAlignment = "Neutral";
  characterAlignment.innerText = newCharacter.characterAlignment;
  characterAlignment.style.color = "rgb(212, 212, 212)"
  evilAlignment.style.display = "none";
  neutralAlignment.style.display = "none";
  goodAlignment.style.display = "none";
  newCharacter.rollStrength();
  newCharacter.rollDexterity();
  newCharacter.rollConstitution();
  newCharacter.rollWisdom();
  newCharacter.rollIntelligence();
  newCharacter.rollCharisma();
  characterArmor.style.display = "inherit";
  setTimeout(() => {
    characterHealth.style.display = "inherit";
  }, 200);
  setTimeout(() => {
    characterStrength.style.display = "inherit";
  }, 400);
  setTimeout(() => {
    characterDexterity.style.display = "inherit";
  }, 600);
  setTimeout(() => {
    characterConstitution.style.display = "inherit";
  }, 800);
  setTimeout(() => {
    characterWisdom.style.display = "inherit";
  }, 1000);
  setTimeout(() => {
    characterIntelligence.style.display = "inherit";
  }, 1200);
  setTimeout(() => {
    characterCharisma.style.display = "inherit";
  }, 1400);
  characterArmor.innerText = `Armor: ${newCharacter.characterArmor}`;
  characterHealth.innerText = `Hit Points: ${newCharacter.characterHitPoints}`;
  characterStrength.innerText = `Strength: ${newCharacter.characterStrength}`;
  characterDexterity.innerText = `Dexterity: ${newCharacter.characterDexterity}`;
  characterConstitution.innerText = `Constitution: ${newCharacter.characterConstitution}`;
  characterWisdom.innerText = `Wisdom: ${newCharacter.characterWisdom}`;
  characterIntelligence.innerText = `Intelligence: ${newCharacter.characterIntelligence}`;
  characterCharisma.innerText = `Charisma: ${newCharacter.characterCharisma}`;
});

goodAlignment.addEventListener("click", () => {
  newCharacter.characterAlignment = "Good";
  characterAlignment.innerText = newCharacter.characterAlignment;
  characterAlignment.style.color = "rgb(212, 212, 212)"
  evilAlignment.style.display = "none";
  neutralAlignment.style.display = "none";
  goodAlignment.style.display = "none";
  newCharacter.rollStrength();
  newCharacter.rollDexterity();
  newCharacter.rollConstitution();
  newCharacter.rollWisdom();
  newCharacter.rollIntelligence();
  newCharacter.rollCharisma();
  characterArmor.style.display = "inherit";
  setTimeout(() => {
    characterHealth.style.display = "inherit";
  }, 200);
  setTimeout(() => {
    characterStrength.style.display = "inherit";
  }, 400);
  setTimeout(() => {
    characterDexterity.style.display = "inherit";
  }, 600);
  setTimeout(() => {
    characterConstitution.style.display = "inherit";
  }, 800);
  setTimeout(() => {
    characterWisdom.style.display = "inherit";
  }, 1000);
  setTimeout(() => {
    characterIntelligence.style.display = "inherit";
  }, 1200);
  setTimeout(() => {
    characterCharisma.style.display = "inherit";
  }, 1400);
  characterArmor.innerText = `Armor: ${newCharacter.characterArmor}`;
  characterHealth.innerText = `Hit Points: ${newCharacter.characterHitPoints}`;
  characterStrength.innerText = `Strength: ${newCharacter.characterStrength}`;
  characterDexterity.innerText = `Dexterity: ${newCharacter.characterDexterity}`;
  characterConstitution.innerText = `Constitution: ${newCharacter.characterConstitution}`;
  characterWisdom.innerText = `Wisdom: ${newCharacter.characterWisdom}`;
  characterIntelligence.innerText = `Intelligence: ${newCharacter.characterIntelligence}`;
  characterCharisma.innerText = `Charisma: ${newCharacter.characterCharisma}`;
});

function rollDice() {
  let diceRoll = Math.floor(Math.random() * 20 + 1);
  return diceRoll;
}

function attackRoll() {
  let newOpponent = new Opponent();
  let damage;
  rollDice();
  if (diceRoll >= newOpponent.opponentArmor) {
    damage = 1;
    damage += this.characterStrengthModifier;
    if (damage < 1) {
      damage = 1;
      return damage; } 
    newOpponent.opponentHitPoints -= damage;
    newCharacter.characterExperience += 10;
  }
  if (diceRoll == 20) {
    damage = 2;
    damage += newCharacter.characterStrengthModifier * 2;
    if (damage < 1) {
      damage = 1;
    }
    newOpponent.opponentHitPoints -= damage;
    newCharacter.characterExperience += 10;
    return damage; } 
  if (newOpponent.opponentHitPoints == 0) {
    return "Opponent has died";
  }
  if (diceRoll < newOpponent.opponentArmor) {
    return "Miss!";
  }
}
