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
    });
    it("Dexterity modifier works", () => {
      console.log(underTest.rollDexterity());
    });
    it("Constitution modifier works", () => {
      console.log(underTest.rollConstitution());
    });
    it("Wisdom modifier works", () => {
      console.log(underTest.rollWisdom());
    });
    it("Intelligence modifier works", () => {
      console.log(underTest.rollIntelligence());
    });
    it("Charisma modifier works", () => {
      console.log(underTest.rollCharisma());
    });
  });
});
