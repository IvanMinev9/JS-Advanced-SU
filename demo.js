function solve(arr) {
	class Songs {
		constructor(typeList, name, time) {
			this.typeList = typeList;
			this.name = name;
			this.time = time;
		}
	}
	let songs = [];
	let numOfSongs = arr.shift();
	let command = arr.pop();

	for (let el = 0; el < numOfSongs; el++) {
		let tokens = arr[el].split(`_`);

		let [typeList, name, time] = tokens;
		let song = new Songs(typeList, name, time);
		songs.push(song);
	}

	if (command == `all`) {
		songs.forEach((song) => console.log(song.name));
	} else {
		let filtered = songs.filter((song) => song.typeList == command);
		filtered.forEach((song) => console.log(song.name));
	}
}
solve([
	3,
	"favourite_DownTown_3:14",
	"favourite_Kiss_4:16",
	"favourite_Smooth Criminal_4:01",
	"favourite",
]);
console.log(`--------`);
solve([
	4,
	"favourite_DownTown_3:14",
	"listenLater_Andalouse_3:24",
	"favourite_In To The Night_3:58",
	"favourite_Live It Up_3:48",
	"listenLater",
]);
console.log(`--------`);
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
