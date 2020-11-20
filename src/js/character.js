class Character {
    constructor() {
        this.characterName;
        this.characterAlignment;
        this.characterArmor = 10;
        this.characterHitPoints = 5;
        this.characterStrength = 10;
        this.characterDexterity = 10;
        this.characterConstitution = 10;
        this.characterWisdom = 10;
        this.characterIntelligence = 10;
        this.characterCharisma = 10;
        this.characterExperience = 0;
    }

    rollStrength() {
        let strengthModifier = Math.floor((Math.random() * 20) + 1);
        if (strengthModifier == 1) {
            this.characterStrength -= 5;
        }
        if (strengthModifier == 2 || strengthModifier == 3) {
            this.characterStrength -= 4;
        }
        if (strengthModifier == 4 || strengthModifier == 5) {
            this.characterStrength -= 3;
        }
        if (strengthModifier == 6 || strengthModifier == 7) {
            this.characterStrength -= 2;
        }
        if (strengthModifier == 8 || strengthModifier == 9) {
            this.characterStrength -= 1;
        }
        if (strengthModifier == 12 || strengthModifier == 13) {
            this.characterStrength += 1;
        }
        if (strengthModifier == 14 || strengthModifier == 15) {
            this.characterStrength += 2;
        }
        if (strengthModifier == 16 || strengthModifier == 17) {
            this.characterStrength += 3;
        }
        if (strengthModifier == 18 || strengthModifier == 19) {
            this.characterStrength += 4
        }
        if (strengthModifier == 20) {
            this.characterStrength += 5;
        }
    }

    rollDexterity() {
        let dexterityModifier = Math.floor((Math.random() * 20) + 1);
        if (dexterityModifier == 1) {
            this.characterDexterity -= 5;
        }
        if (dexterityModifier == 2 || dexterityModifier == 3) {
            this.characterDexterity -= 4;
        }
        if (dexterityModifier == 4 || dexterityModifier == 5) {
            this.characterDexterity -= 3;
        }
        if (dexterityModifier == 6 || dexterityModifier == 7) {
            this.characterDexterity -= 2;
        }
        if (dexterityModifier == 8 || dexterityModifier == 9) {
            this.characterDexterity -= 1;
        }
        if (dexterityModifier == 12 || dexterityModifier == 13) {
            this.characterDexterity += 1;
        }
        if (dexterityModifier == 14 || dexterityModifier == 15) {
            this.characterDexterity += 2;
        }
        if (dexterityModifier == 16 || dexterityModifier == 17) {
            this.characterDexterity += 3;
        }
        if (dexterityModifier == 18 || dexterityModifier == 19) {
            this.characterDexterity += 4
        }
        if (dexterityModifier == 20) {
            this.characterDexterity += 5;
        }
    }

    rollConstitution() {
        let constitutionModifier = Math.floor((Math.random() * 20) + 1);
        if (constitutionModifier == 1) {
            this.characterConstitution -= 5;
        }
        if (constitutionModifier == 2 || constitutionModifier == 3) {
            this.characterConstitution -= 4;
        }
        if (constitutionModifier == 4 || constitutionModifier == 5) {
            this.characterConstitution -= 3;
        }
        if (constitutionModifier == 6 || constitutionModifier == 7) {
            this.characterConstitution -= 2;
        }
        if (constitutionModifier == 8 || constitutionModifier == 9) {
            this.characterConstitution -= 1;
        }
        if (constitutionModifier == 12 || constitutionModifier == 13) {
            this.characterConstitution += 1;
        }
        if (constitutionModifier == 14 || constitutionModifier == 15) {
            this.characterConstitution += 2;
        }
        if (constitutionModifier == 16 || constitutionModifier == 17) {
            this.characterConstitution += 3;
        }
        if (constitutionModifier == 18 || constitutionModifier == 19) {
            this.characterConstitution += 4
        }
        if (constitutionModifier == 20) {
            this.characterConstitution += 5;
        }
    }

    rollWisdom() {
        let wisdomModifier = Math.floor((Math.random() * 20) + 1);
        if (wisdomModifier == 1) {
            this.characterWisdom -= 5;
        }
        if (wisdomModifier == 2 || wisdomModifier == 3) {
            this.characterWisdom -= 4;
        }
        if (wisdomModifier == 4 || wisdomModifier == 5) {
            this.characterWisdom -= 3;
        }
        if (wisdomModifier == 6 || wisdomModifier == 7) {
            this.characterWisdom -= 2;
        }
        if (wisdomModifier == 8 || wisdomModifier == 9) {
            this.characterWisdom -= 1;
        }
        if (wisdomModifier == 12 || wisdomModifier == 13) {
            this.characterWisdom += 1;
        }
        if (wisdomModifier == 14 || wisdomModifier == 15) {
            this.characterWisdom += 2;
        }
        if (wisdomModifier == 16 || wisdomModifier == 17) {
            this.characterWisdom += 3;
        }
        if (wisdomModifier == 18 || wisdomModifier == 19) {
            this.characterWisdom += 4
        }
        if (wisdomModifier == 20) {
            this.characterWisdom += 5;
        }
    }

    rollIntelligence() {
        let intelligenceModifier = Math.floor((Math.random() * 20) + 1);
        if (intelligenceModifier == 1) {
            this.characterIntelligence -= 5;
        }
        if (intelligenceModifier == 2 || intelligenceModifier == 3) {
            this.characterIntelligence -= 4;
        }
        if (intelligenceModifier == 4 || intelligenceModifier == 5) {
            this.characterIntelligence -= 3;
        }
        if (intelligenceModifier == 6 || intelligenceModifier == 7) {
            this.characterIntelligence -= 2;
        }
        if (intelligenceModifier == 8 || intelligenceModifier == 9) {
            this.characterIntelligence -= 1;
        }
        if (intelligenceModifier == 12 || intelligenceModifier == 13) {
            this.characterIntelligence += 1;
        }
        if (intelligenceModifier == 14 || intelligenceModifier == 15) {
            this.characterIntelligence += 2;
        }
        if (intelligenceModifier == 16 || intelligenceModifier == 17) {
            this.characterIntelligence += 3;
        }
        if (intelligenceModifier == 18 || intelligenceModifier == 19) {
            this.characterIntelligence += 4
        }
        if (intelligenceModifier == 20) {
            this.characterIntelligence += 5;
        }
    }

    rollCharisma() {
        let charismaModifier = Math.floor((Math.random() * 20) + 1);
        if (charismaModifier == 1) {
            this.characterCharisma -= 5;
        }
        if (charismaModifier == 2 || charismaModifier == 3) {
            this.characterCharisma -= 4;
        }
        if (charismaModifier == 4 || charismaModifier == 5) {
            this.characterCharisma -= 3;
        }
        if (charismaModifier == 6 || charismaModifier == 7) {
            this.characterCharisma -= 2;
        }
        if (charismaModifier == 8 || charismaModifier == 9) {
            this.characterCharisma -= 1;
        }
        if (charismaModifier == 12 || charismaModifier == 13) {
            this.characterCharisma += 1;
        }
        if (charismaModifier == 14 || charismaModifier == 15) {
            this.characterCharisma += 2;
        }
        if (charismaModifier == 16 || charismaModifier == 17) {
            this.characterCharisma += 3;
        }
        if (charismaModifier == 18 || charismaModifier == 19) {
            this.characterCharisma += 4
        }
        if (charismaModifier == 20) {
            this.characterCharisma += 5;
        }
    }
}

export { Character }



