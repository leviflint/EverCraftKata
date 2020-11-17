import { Character } from "../src/js/character.js";

describe("Can create a character", () => {
  describe("Can set a character name", () => {
    let underTest;

    beforeEach(() => {
      underTest = new Character();
    });

    it("Player is prompted for a name", () => {
      expect(underTest.characterName).toBe()
    })
  })
}) 