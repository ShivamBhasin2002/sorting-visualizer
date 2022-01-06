import React, { useState, useEffect } from 'react';

import Visualizer from './visualizer/visualizer.component';

import { newArray } from './utilityFunctions/helpperFunctions';
import sorting from './utilityFunctions/sortingAlgorithms';

import './App.scss';

const App = () => {
	const [size, setSize] = useState(100);
	const [array, setArray] = useState(newArray(size));
	const [sortMethod, setSortMethod] = useState('selectSort');
	//testing sorting algorithms using useEffect
	// useEffect(async (tests = 100) => {
	// 	for (let i = 0; i < tests; i++) {
	// 		let flag = true;
	// 		let array = newArray(Math.floor(Math.random() * 700));
	// 		let testArray = sorting.selectSort(array);
	// 		array.sort((x, y) => x - y);
	// 		if (array.size !== testArray.size) flag = false;
	// 		for (let i = 0; i < array.size && flag; i++)
	// 			if (array[i] !== testArray[i]) flag = false;
	// 		console.log(flag);
	// 	}
	// });

	const sortAnimation = (arr, sort) => {
		let animation = sort(arr);
		// animation.map(({ classname, pos }, c) => {
		// 	setTimeout(
		// 		() =>
		// 			pos.map((i) => {
		// 				document.querySelector(`#bar${i}`).classList.toggle(classname);
		// 				setTimeout(
		// 					() =>
		// 						document.querySelector(`#bar${i}`).classList.toggle(classname),
		// 					c * 2
		// 				);
		// 			}),
		// 		c * 3
		// 	);
		// 	if (classname === 'swap') {
		// 		setTimeout(
		// 			() =>
		// 				([
		// 					document.querySelector(`#bar${pos[0]}`).style.height,
		// 					document.querySelector(`#bar${pos[1]}`).style.height,
		// 				] = [
		// 					document.querySelector(`#bar${pos[1]}`).style.height,
		// 					document.querySelector(`#bar${pos[0]}`).style.height,
		// 				]),
		// 			c * 3
		// 		);
		// 	}
		// });
		animation.map(({ classname, pos }, c) =>
			setTimeout(() => {
				setTimeout(
					() =>
						pos.map((i) => {
							document.querySelector(`#bar${i}`).classList.toggle(classname);
							if (classname !== 'sorted')
								setTimeout(
									() =>
										document
											.querySelector(`#bar${i}`)
											.classList.toggle(classname),
									c * 0.1
								);
						}),
					c * 5
				);
				if (classname === 'swap') {
					setTimeout(
						() =>
							([
								document.querySelector(`#bar${pos[0]}`).style.height,
								document.querySelector(`#bar${pos[1]}`).style.height,
							] = [
								document.querySelector(`#bar${pos[1]}`).style.height,
								document.querySelector(`#bar${pos[0]}`).style.height,
							]),
						c * 5.55
					);
				}
			}, c * 10)
		);
	};
	return (
		<div>
			<nav className='navbar'>
				<div className='navbar-container'>
					<button
						className='btn btn-lg btn-dark'
						onClick={() => setArray(newArray(size))}
					>
						Genrate Array
					</button>

					<select
						className='form-select'
						aria-label='Default select example'
						style={{ width: '200px' }}
						defaultValue='selectSort'
						onChange={(e) => setSortMethod(e.target.value)}
					>
						<option defaultValue='selectSort'>Select Sort</option>
						<option defaultValue='bubbleSort'>Bubble Sort</option>
						<option defaultValue='insertSort'>Insert Sort</option>
						<option defaultValue='mergeSort'>Merge Sort</option>
						<option defaultValue='quickSort'>Quick Sort</option>
					</select>

					<span className='inputArea'>
						<label htmlFor='sizeSlider'>Size:</label>
						<input
							type='range'
							min='5'
							max='450'
							defaultValue='100'
							className='slider'
							id='sizeSlider'
							onChange={(e) => {
								setSize(e.target.value);
								setArray(newArray(size));
							}}
						/>
					</span>

					<button
						className='btn btn-lg btn-dark'
						onClick={() => sortAnimation(array, sorting[sortMethod])}
					>
						Sort
					</button>
				</div>
			</nav>
			<Visualizer arr={array} />
		</div>
	);
};

export default App;
