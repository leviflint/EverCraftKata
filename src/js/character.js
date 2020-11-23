class Character {
  constructor() {
    this.characterName;
    this.characterAlignment;
    this.characterArmor = 10;
    this.characterHitPoints = 5;
    this.characterStrength = 10;
    this.characterStrengthModifier;
    this.characterDexterity = 10;
    this.characterDexterityModifier;
    this.characterConstitution = 10;
    this.characterConstitutionModifier;
    this.characterWisdom = 10;
    this.characterWisdomModifier;
    this.characterIntelligence = 10;
    this.characterIntelligenceModifier;
    this.characterCharisma = 10;
    this.characterCharismaModifier;
    this.characterExperience = 0;
    this.characterLevel = 1;
    this.characterAttackRoll = 1;
  }

  rollStrength() {
    let strengthModifierRoll = Math.floor(Math.random() * 20 + 1);
    if (strengthModifierRoll == 1) {
      this.characterStrengthModifier = -5;
    }
    if (strengthModifierRoll == 2 || strengthModifierRoll == 3) {
      this.characterStrengthModifier = -4;
    }
    if (strengthModifierRoll == 4 || strengthModifierRoll == 5) {
      this.characterStrengthModifier = -3;
    }
    if (strengthModifierRoll == 6 || strengthModifierRoll == 7) {
      this.characterStrengthModifier = -2;
    }
    if (strengthModifierRoll == 8 || strengthModifierRoll == 9) {
      this.characterStrengthModifier = -1;
    }
    if (strengthModifierRoll == 10 || strengthModifierRoll == 11) {
      this.characterStrengthModifier = 0;
    } 
    if (strengthModifierRoll == 12 || strengthModifierRoll == 13) {
      this.characterStrengthModifier = 1;
    }
    if (strengthModifierRoll == 14 || strengthModifierRoll == 15) {
      this.characterStrengthModifier = 2;
    }
    if (strengthModifierRoll == 16 || strengthModifierRoll == 17) {
      this.characterStrengthModifier = 3;
    }
    if (strengthModifierRoll == 18 || strengthModifierRoll == 19) {
      this.characterStrengthModifier = 4;
    }
    if (strengthModifierRoll == 20) {
      this.characterStrengthModifier = 5;
    }
    this.characterStrength += this.characterStrengthModifier;
  }

  rollDexterity() {
    let dexterityModifierRoll = Math.floor(Math.random() * 20 + 1);
    if (dexterityModifierRoll == 1) {
      this.characterDexterityModifier = -5;
    }
    if (dexterityModifierRoll == 2 || dexterityModifierRoll == 3) {
      this.characterDexterityModifier = -4;
    }
    if (dexterityModifierRoll == 4 || dexterityModifierRoll == 5) {
      this.characterDexterityModifier = -3;
    }
    if (dexterityModifierRoll == 6 || dexterityModifierRoll == 7) {
      this.characterDexterityModifier = -2;
    }
    if (dexterityModifierRoll == 8 || dexterityModifierRoll == 9) {
      this.characterDexterityModifier = -1;
    }
    if (dexterityModifierRoll == 10 || dexterityModifierRoll == 11) {
      this.characterDexterityModifier = 0;
    }
    if (dexterityModifierRoll == 12 || dexterityModifierRoll == 13) {
      this.characterDexterityModifier = 1;
    }
    if (dexterityModifierRoll == 14 || dexterityModifierRoll == 15) {
      this.characterDexterityModifier = 2;
    }
    if (dexterityModifierRoll == 16 || dexterityModifierRoll == 17) {
      this.characterDexterityModifier = 3;
    }
    if (dexterityModifierRoll == 18 || dexterityModifierRoll == 19) {
      this.characterDexterityModifier = 4;
    }
    if (dexterityModifierRoll == 20) {
      this.characterDexterityModifier = 5;
    }
    this.characterArmor += this.characterDexterityModifier;
    this.characterDexterity += this.characterDexterityModifier;
  }

  rollConstitution() {
    let constitutionModifierRoll = Math.floor(Math.random() * 20 + 1);
    if (constitutionModifierRoll == 1) {
      this.characterConstitutionModifier = -5;
    }
    if (constitutionModifierRoll == 2 || constitutionModifierRoll == 3) {
      this.characterConstitutionModifier = -4;
    }
    if (constitutionModifierRoll == 4 || constitutionModifierRoll == 5) {
      this.characterConstitutionModifier = -3;
    }
    if (constitutionModifierRoll == 6 || constitutionModifierRoll == 7) {
      this.characterConstitutionModifier = -2;
    }
    if (constitutionModifierRoll == 8 || constitutionModifierRoll == 9) {
      this.characterConstitutionModifier = -1;
    }
    if (constitutionModifierRoll == 10 || constitutionModifierRoll == 11) {
      this.characterConstitutionModifier = 0;
    }
    if (constitutionModifierRoll == 12 || constitutionModifierRoll == 13) {
      this.characterConstitutionModifier = 1;
    }
    if (constitutionModifierRoll == 14 || constitutionModifierRoll == 15) {
      this.characterConstitutionModifier = 2;
    }
    if (constitutionModifierRoll == 16 || constitutionModifierRoll == 17) {
      this.characterConstitutionModifier = 3;
    }
    if (constitutionModifierRoll == 18 || constitutionModifierRoll == 19) {
      this.characterConstitutionModifier = 4;
    }
    if (constitutionModifierRoll == 20) {
      this.characterConstitutionModifier = 5;
    }
    this.characterConstitution += this.characterConstitutionModifier;
    if (this.characterConstitution <= 0) {
      this.characterConstitution = 1;
    }
  }

  rollWisdom() {
    let wisdomModifierRoll = Math.floor(Math.random() * 20 + 1);
    if (wisdomModifierRoll == 1) {
      this.characterWisdomModifier = -5;
    }
    if (wisdomModifierRoll == 2 || wisdomModifierRoll == 3) {
      this.characterWisdomModifier = -4;
    }
    if (wisdomModifierRoll == 4 || wisdomModifierRoll == 5) {
      this.characterWisdomModifier = -3;
    }
    if (wisdomModifierRoll == 6 || wisdomModifierRoll == 7) {
      this.characterWisdomModifier = -2;
    }
    if (wisdomModifierRoll == 8 || wisdomModifierRoll == 9) {
      this.characterWisdomModifier = -1;
    }
    if (wisdomModifierRoll == 10 || wisdomModifierRoll == 11) {
      this.characterWisdomModifier = 0;
    }
    if (wisdomModifierRoll == 12 || wisdomModifierRoll == 13) {
      this.characterWisdomModifier = 1;
    }
    if (wisdomModifierRoll == 14 || wisdomModifierRoll == 15) {
      this.characterWisdomModifier = 2;
    }
    if (wisdomModifierRoll == 16 || wisdomModifierRoll == 17) {
      this.characterWisdomModifier = 3;
    }
    if (wisdomModifierRoll == 18 || wisdomModifierRoll == 19) {
      this.characterWisdomModifier = 4;
    }
    if (wisdomModifierRoll == 20) {
      this.characterWisdomModifier = 5;
    }
    this.characterWisdom += this.characterWisdomModifier;
  }

  rollIntelligence() {
    let intelligenceModifierRoll = Math.floor(Math.random() * 20 + 1);
    if (intelligenceModifierRoll == 1) {
      this.characterIntelligenceModifier = -5;
    }
    if (intelligenceModifierRoll == 2 || intelligenceModifierRoll == 3) {
      this.characterIntelligenceModifier = -4;
    }
    if (intelligenceModifierRoll == 4 || intelligenceModifierRoll == 5) {
      this.characterIntelligenceModifier = -3;
    }
    if (intelligenceModifierRoll == 6 || intelligenceModifierRoll == 7) {
      this.characterIntelligenceModifier = -2;
    }
    if (intelligenceModifierRoll == 8 || intelligenceModifierRoll == 9) {
      this.characterIntelligenceModifier = -1;
    }
    if (intelligenceModifierRoll == 10 || intelligenceModifierRoll == 11) {
      this.characterIntelligenceModifier = 0;
    }
    if (intelligenceModifierRoll == 12 || intelligenceModifierRoll == 13) {
      this.characterIntelligenceModifier = 1;
    }
    if (intelligenceModifierRoll == 14 || intelligenceModifierRoll == 15) {
      this.characterIntelligenceModifier = 2;
    }
    if (intelligenceModifierRoll == 16 || intelligenceModifierRoll == 17) {
      this.characterIntelligenceModifier = 3;
    }
    if (intelligenceModifierRoll == 18 || intelligenceModifierRoll == 19) {
      this.characterIntelligenceModifier = 4;
    }
    if (intelligenceModifierRoll == 20) {
      this.characterIntelligenceModifier = 5;
    }
    this.characterIntelligence += this.characterIntelligenceModifier;
  }

  rollCharisma() {
    let charismaModifierRoll = Math.floor(Math.random() * 20 + 1);
    if (charismaModifierRoll == 1) {
      this.characterCharismaModifier = -5;
    }
    if (charismaModifierRoll == 2 || charismaModifierRoll == 3) {
      this.characterCharismaModifier = -4;
    }
    if (charismaModifierRoll == 4 || charismaModifierRoll == 5) {
      this.characterCharismaModifier = -3;
    }
    if (charismaModifierRoll == 6 || charismaModifierRoll == 7) {
      this.characterCharismaModifier = -2;
    }
    if (charismaModifierRoll == 8 || charismaModifierRoll == 9) {
      this.characterCharismaModifier = -1;
    }
    if (charismaModifierRoll == 10 || charismaModifierRoll == 11) {
      this.characterCharismaModifier = 0;
    }
    if (charismaModifierRoll == 12 || charismaModifierRoll == 13) {
      this.characterCharismaModifier = 1;
    }
    if (charismaModifierRoll == 14 || charismaModifierRoll == 15) {
      this.characterCharismaModifier = 2;
    }
    if (charismaModifierRoll == 16 || charismaModifierRoll == 17) {
      this.characterCharismaModifier = 3;
    }
    if (charismaModifierRoll == 18 || charismaModifierRoll == 19) {
      this.characterCharismaModifier = 4;
    }
    if (charismaModifierRoll == 20) {
      this.characterCharismaModifier = 5;
    }
    this.characterCharisma += this.characterCharismaModifier;
  }

  levelUp() {
    if (this.characterExperience % 1000 === 0) {
      this.characterLevel++;
      this.characterConstitution += 5 + this.characterConstitutionModifier;
    }
    if (this.characterLevel % 2 === 0) {
      this.characterAttackRoll++;
    }
  }
}

export { Character };
