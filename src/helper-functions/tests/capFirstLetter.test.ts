import { capFirstLetter } from "../capFirstLetter";

test("It should capitalize first", () => {
  let result = capFirstLetter("dog");
  expect(result).toBe("Dog");
});
