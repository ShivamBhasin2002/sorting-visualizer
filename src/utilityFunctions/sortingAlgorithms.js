module.exports.selectSort = (arr) => {
	let newArray = arr.slice(),
		animations = [];
	for (let i = 0; i < newArray.length - 1; i++) {
		let min_idx = i;
		for (let j = i + 1; j < newArray.length; j++) {
			if (newArray[i] > newArray[j]) {
				animations.push({ classname: 'compare', pos: [i, j] });
			}
		}
		[newArray[j], newArray[i]] = [newArray[i], newArray[j]];
		animations.push({ classname: 'swap', pos: [i, j] });
		animations.push({ classname: 'sorted', pos: [i] });
	}
	animations.push({ classname: 'sorted', pos: [newArray.length - 1] });
	return animations;
};
