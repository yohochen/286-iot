import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = (props) => {
	// const payload = props.data.slice(0, 50).map((cur) => {
	// 	const container = {};
	// 	container.time = cur.time;
	// 	container.humidity = cur.humidity;
	// 	container.moisture = cur.moisture;
	// 	container.temperature = cur.temperature;
	// 	return container;
	// });

	var timeLabels = [];
	// var humidities = [];
	var moistures = [];
	var temperatures = [];

	var tempHigh = Number.MIN_SAFE_INTEGER;
	var tempLow = Number.MAX_SAFE_INTEGER;

	var moistHigh = Number.MIN_SAFE_INTEGER;
	var moistLow = Number.MAX_SAFE_INTEGER;

	// const slicedData = props.data.slice(-200);
	const slicedData = props.data;
	for (var id in slicedData) {
		// getting the latest 100 datapoint, subject to change
		timeLabels.push(slicedData[id].time);
		// humidities.push(slicedData[id].humidity);
		moistures.push(slicedData[id].moisture);
		temperatures.push(slicedData[id].temperature * 1.8 + 32); // get Fahrenheit from Celsius

		tempHigh = Math.max(tempHigh, slicedData[id].temperature * 1.8 + 32);
		tempLow = Math.min(tempLow, slicedData[id].temperature * 1.8 + 32);
		moistHigh = Math.max(moistHigh, slicedData[id].moisture);
		moistLow = Math.min(moistLow, slicedData[id].moisture);
	}

	return (
		<div>
			<Line
				data={{
					labels: timeLabels,
					datasets: [
						// {
						// 	// Humidity
						// 	label: 'Humidity',
						// 	data: humidities,
						// 	borderColor: 'blue',
						// 	borderWidth: 1,
						// },

						// Temperature
						{
							label: 'Temperature',
							data: temperatures,
							borderColor: 'rgba(255, 159, 64, 1)',
							borderWidth: 1,
						},

						// Moisture
						{
							label: 'Moisture',
							data: moistures,
							borderColor: 'Green',
							borderWidth: 1,
						},
					],
				}}
				height={400}
				width={600}
				options={{
					maintainAspectRatio: true,
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				}}
			/>

			<br></br>
			<br></br>
			<div className='row'>
				<div className='col '>
					<h3 style={{ color: 'rgba(255, 159, 64, 1)' }}>
						Recent Temperature Low:{' '}
						{tempLow == Number.MAX_SAFE_INTEGER
							? ''
							: tempLow.toFixed(1) + '°F'}
					</h3>
					<h3 style={{ color: 'rgba(255, 159, 64, 1)' }}>
						Recent Temperature High:{' '}
						{tempHigh == Number.MIN_SAFE_INTEGER
							? ''
							: tempHigh.toFixed(1) + '°F'}
					</h3>
				</div>

				<div className='col'>
					<h3 style={{ color: 'green' }}>
						Recent Moisture Low:{' '}
						{moistLow == Number.MAX_SAFE_INTEGER
							? ''
							: moistLow.toFixed(1)}
					</h3>
					<h3 style={{ color: 'green' }}>
						Recent Moisture High:{' '}
						{moistHigh == Number.MIN_SAFE_INTEGER
							? ''
							: moistHigh.toFixed(1)}
					</h3>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

export default LineChart;
