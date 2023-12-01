function hashTag(text) {
  let splitT = text.split(` `);

  let findH = splitT.filter(
    (words) => words.startsWith(`#`) && words.length > 1
  );

  for (let word of findH) {
    word = word.slice(1);

    let isValid = true;

    for (let char of word) {
      if (!/[A-Za-z]/.test(char)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      console.log(word);
    }
  }
}
hashTag("Nowadays everyone uses # to tag a #speci234al word in #socialMedia");
