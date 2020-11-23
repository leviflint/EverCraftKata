describe("Logic Testing", () => {
  describe("First iteration logic testing", () => {
    let underTest;
    beforeEach(() => {
      underTest = new Character();
    });

    it("Player can roll dice", () => {
      console.log(rollDice());
    });
    it("Strength modifier works", () => {
      console.log(underTest.rollStrength());
      console.log(undertest.characterStrengthModifier)
    });
    it("Dexterity modifier works", () => {
      console.log(underTest.rollDexterity());
      console.log(undertest.characterDexterityModifier)
    });
    it("Constitution modifier works", () => {
      console.log(underTest.rollConstitution());
      console.log(underTest.characterConstitutionModifier)
    });
    it("Wisdom modifier works", () => {
      console.log(underTest.rollWisdom());
      console.log(underTest.characterWisdomModifier)
    });
    it("Intelligence modifier works", () => {
      console.log(underTest.rollIntelligence());
      console.log(underTest.characterIntelligenceModifier)
    });
    it("Charisma modifier works", () => {
      console.log(underTest.rollCharisma());
      console.log(underTest.characterCharismaModifier)
    });
  });
});
