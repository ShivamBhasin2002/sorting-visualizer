module.exports.selectSort = (arr) => {
	let newArray = arr.slice(),
		animations = [];
	for (let i = 0; i < newArray.length - 1; i++) {
		let min_idx = i;
		animations.push({ classname: 'compare', pos: [min_idx] });
		for (let j = i + 1; j < newArray.length; j++) {
			animations.push({ classname: 'compare', pos: [j] });
			animations.push({ classname: 'compare', pos: [j] });
			if (newArray[min_idx] > newArray[j]) {
				animations.push({ classname: 'compare', pos: [min_idx] });
				min_idx = j;
				animations.push({ classname: 'compare', pos: [min_idx] });
			}
		}
		animations.push({ classname: 'compare', pos: [min_idx] });
		animations.push({ classname: 'swap', pos: [i, min_idx], firstCall: true });
		animations.push({ classname: 'swap', pos: [i, min_idx], firstCall: false });
		[newArray[i], newArray[min_idx]] = [newArray[min_idx], newArray[i]];
		animations.push({ classname: 'sorted', pos: [i] });
	}
	animations.push({ classname: 'sorted', pos: [newArray.length - 1] });
	return animations;
};
