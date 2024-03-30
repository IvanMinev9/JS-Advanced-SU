function towns(arr) {
	for (let towns of arr) {
		let [town, latitude, longitude] = towns.split(` | `);
		latitude = Number(latitude).toFixed(2);
		longitude = Number(longitude).toFixed(2);
		let townObj = {
			town: town,
			latitude: latitude,
			longitude: longitude,
		};

		console.log(townObj);
	}
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
