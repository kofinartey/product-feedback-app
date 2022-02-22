import { capFirstLetter } from "../capFirstLetter";

describe("Capitalize first letter", () => {
  it("should work for small letters", () => {
    let result = capFirstLetter("dog");
    expect(result).toBe("Dog");
  });
  it("should work for capital letters", () => {
    let result = capFirstLetter("DOG");
    expect(result).toBe("Dog");
  });
});
