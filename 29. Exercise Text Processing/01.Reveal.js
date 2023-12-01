function reveal(word, text) {
  let splitedT = word.split(`, `);
  let finalText = text;

  let blank = text.split(` `);
  let missed = blank.filter((words) => words.includes(`*`));

  for (let words of missed) {
    let finnalReplace = finalText.find(
      (words) => words.length == missed.length
    );
    missed = missed.replace(words, finnalReplace);
  }
}
reveal(
  "great",
  "softuni is ***** place for learning new programming languages"
);

reveal(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
