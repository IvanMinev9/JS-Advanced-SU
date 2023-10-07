function echo(type) {
  let par = typeof type;
  console.log(par);

  if (par == `string` || par == `number`) {
    console.log(type);
  } else {
    console.log(`Parameter is not suitable for printing`);
  }
}

echo("Hello, JavaScript!");
