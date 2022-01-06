module.exports.selectionSort = (arr) => {
	for (let i = 0; i < arr.size - 1; i++) {
		let minIdx = i;
		for (let j = i + 1; j < arr.size; j++) if (arr[i] > arr[j]) minIdx = j;
		[arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
	}
	return arr;
};
