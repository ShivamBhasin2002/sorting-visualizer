import React, { useState, useEffect } from 'react';

import Visualizer from './visualizer/visualizer.component';

import { newArray } from './utilityFunctions/helpperFunctions';
import { selectionSort } from './utilityFunctions/sortingAlgorithms';

import './App.scss';

const App = () => {
	const [size, setSize] = useState(100);
	const [array, setArray] = useState(newArray(size));
	const [sortMethod, setSortMethod] = useState('selectionSort');
	//testing sorting algorithms using useEffect
	// useEffect(async (tests = 1000) => {
	// 	for (let i = 0; i < tests; i++) {
	// 		let flag = true;
	// 		let array = newArray(Math.floor(Math.random() * 700));
	// 		let testArray = selectionSort(array);
	// 		array.sort((x, y) => x - y);
	// 		if (array.size !== testArray.size) flag = false;
	// 		for (let i = 0; i < array.size && flag; i++)
	// 			if (array[i] !== testArray[i]) flag = false;
	// 		console.log(flag);
	// 	}
	// });
	return (
		<div>
			<nav className='navbar navbar-light bg-light'>
				<div className='navbar-container'>
					<button
						className='btn btn-lg btn-danger'
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

					<button className='btn btn-lg btn-success'>Sort</button>
				</div>
			</nav>
			<Visualizer arr={array} />
		</div>
	);
};

export default App;
