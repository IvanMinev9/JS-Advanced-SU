function solve(a, b, operator) {
	let multiply = (a, b) => a * b;
	let divide = (a, b) => a / b;
	let add = (a, b) => a + b;
	let subtract = (a, b) => a - b;

	let operations = [multiply, divide, add, subtract];

	let operationsName = [`multiply`, `divide`, `add`, `subtract`];

	let index;

	for (i = 0; i < operationsName.length; i++) {
		if (operationsName[i] == operator) {
			index = i;
		}
	}

	let oper = operations[index];
	console.log(oper(a, b));
}

solve(5, 5, `multiply`);
solve(40, 8, `divide`);
solve(12, 19, `add`);
solve(50, 13, `subtract`);
