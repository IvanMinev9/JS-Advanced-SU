function hard(arr) {
  let [letter, wordsArr] = arr;

  let letterWords = letter.split(` `);
  let blank = letterWords.filter((word) => word.includes(`_`));

  for (let slot of blank) {
    slot = slot.slice(0, slot.length - 1);

    let fillWords = wordsArr.find((word) => word.length == slot.length);
    letter = letter.replace(slot, fillWords);
  }

  console.log(letter);
}
hard([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
