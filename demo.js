function processOrders(input) {
  let totalIncome = 0;

  for (const line of input) {
    const validOrderRegex =
      /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/gm;
    const match = line.match(validOrderRegex);

    if (match) {
      const { customer, product, count, price } = match.groups;
      const totalPrice = Number(count) * Number(price);
      totalIncome += totalPrice;

      console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// Example usage
const input1 = [
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
];
processOrders(input1);

const input2 = [
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4$",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
];
processOrders(input2);
