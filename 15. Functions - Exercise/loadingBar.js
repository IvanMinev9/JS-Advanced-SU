function barPro(num) {
  let pro100 = `%`.repeat(num / 10);
  let chardot = `.`.repeat(10 - num / 10);

  if (num == 100) {
    console.log(`${num}% Complete!`);
    console.log(`100% Complete!`);
  } else {
    console.log(`${num}% [${pro100}${chardot}]`);
    console.log(`Still loading...`);
  }
}
barPro(30);
