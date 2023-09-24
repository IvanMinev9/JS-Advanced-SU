function vacation(count, type, day) {
  let singPrice = 0;

  switch (day) {
    case `Friday`:
      if (type == `Students`) {
        singPrice = 8.45;
      } else if (type == `Business`) {
        singPrice = 10.9;
      } else if (type == `Regular`) {
        singPrice = 15;
      }
      break;

    case `Saturday`:
      if (type == `Students`) {
        singPrice = 9.8;
      } else if (type == `Business`) {
        singPrice = 15.6;
      } else if (type == `Regular`) {
        singPrice = 20;
      }
      break;

    case `Sunday`:
      if (type == `Students`) {
        singPrice = 10.46;
      } else if (type == `Business`) {
        singPrice = 16;
      } else if (type == `Regular`) {
        singPrice = 22.5;
      }
      break;
  }
  let totalPrice = count * singPrice;

  if (type == `Students` && count >= 30) {
    totalPrice *= 0.85;
  } else if (type == `Business` && count >= 100) {
    let discount = 10 * singPrice;
    totalPrice -= discount;
  } else if (type == `Regular` && count >= 10 && count <= 20) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(100, "Business", "Saturday");
