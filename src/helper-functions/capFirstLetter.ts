export function capFirstLetter(word: string) {
  if (word) return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
