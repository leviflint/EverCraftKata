

describe("Can create a character", () => {
  describe("Can set starting character values", () => {
    let underTest;

    beforeEach(() => {
      underTest = new Character();
    });

    it("Player has a name", () => {
      underTest.characterName = "Test"
      expect(underTest.characterName).toBe("Test")
    });
    it("Player alignment should be neutral", () => {
      underTest.characterAlignment = "Neutral"
      expect(underTest.characterAlignment).toBe("Neutral")
    });
    it("Player has a starting armor value of 10", () => {
      expect(underTest.characterArmor).toBe(10)
    });
    it("Player has a starting stength value of 10", () => {
      expect(underTest.characterStrength).toBe(10)
    });
    it("Player has a starting dexterity value of 10", () => {
      expect(underTest.characterDexterity).toBe(10)
    });
    it("Player has a starting constitution value of 10", () => {
      expect(underTest.characterConstitution).toBe(10)
    });
    it("Player has a starting wisdom value of 10", () => {
      expect(underTest.characterWisdom).toBe(10)
    });
    it("Player has a starting intelligence value of 10", () => {
      expect(underTest.characterIntelligence).toBe(10)
    });
    it("Plauyer has a starting charisma value of 10", () => {
      expect(underTest.characterCharisma).toBe(10)
    });
  })
}) 