function vac(count, type, day) {
	let price = Number(count);

	if (day == `Friday`) {
		switch (type) {
			case `Students`:
				price *= 8.45;
				break;
			case `Business`:
				price *= 10.9;
				break;
			case `Regular`:
				price *= 15;
				break;
		}
	}
	if (day == `Saturday`) {
		switch (type) {
			case `Students`:
				price *= 9.8;
				break;
			case `Business`:
				price *= 15.6;
				break;
			case `Regular`:
				price *= 20;
				break;
		}
	}
	if (day == `Sunday`) {
		switch (type) {
			case `Students`:
				price *= 10.46;
				break;
			case `Business`:
				price *= 16;
				break;
			case `Regular`:
				price *= 22.5;
				break;
		}
	}

	if (type == `Students` && count >= 30) {
		price *= 0.85;
	} else if (type == `Business` && count >= 100) {
		price -= (price - count) * 10;
	} else if (type == `Regular` && count >= 10 && count <= 20) {
		price *= 0.95;
	}
	console.log(`Total price: ${price.toFixed(2)}`);
}
vac(30, "Students", "Sunday");
