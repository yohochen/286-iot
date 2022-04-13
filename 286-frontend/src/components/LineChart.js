import React, { useState, useEffect } from 'react';
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
	var humidities = [];
	var moistures = [];
	var temperatures = [];

	for (var id in props.data.slice(-100)) {
		// getting the latest 100 datapoint, subject to change
		timeLabels.push(props.data[id].time);
		humidities.push(props.data[id].humidity);
		moistures.push(props.data[id].moisture);
		temperatures.push(props.data[id].temperature);
	}

	return (
		<div>
			<Line
				data={{
					labels: timeLabels,
					datasets: [
						{
							// Humidity
							label: 'Humidity',
							data: humidities,
							// backgroundColor: [
							// 	'rgba(255, 99, 132, 0.2)',
							// 	'rgba(54, 162, 235, 0.2)',
							// 	'rgba(255, 206, 86, 0.2)',
							// 	'rgba(75, 192, 192, 0.2)',
							// 	'rgba(153, 102, 255, 0.2)',
							// 	'rgba(255, 159, 64, 0.2)',
							// ],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								// 'rgba(54, 162, 235, 1)',
								// 'rgba(255, 206, 86, 1)',
								// 'rgba(75, 192, 192, 1)',
								// 'rgba(153, 102, 255, 1)',
								// 'rgba(255, 159, 64, 1)',
							],
							borderWidth: 1,
						},

						// Temperature
						{
							label: 'Temperature',
							data: temperatures,
							// backgroundColor: [
							// 	'rgba(255, 99, 132, 0.2)',
							// 	'rgba(54, 162, 235, 0.2)',
							// 	'rgba(255, 206, 86, 0.2)',
							// 	'rgba(75, 192, 192, 0.2)',
							// 	'rgba(153, 102, 255, 0.2)',
							// 	'rgba(255, 159, 64, 0.2)',
							// ],
							borderColor: [
								// 'rgba(255, 99, 132, 1)',
								// 'rgba(54, 162, 235, 1)',
								// 'rgba(255, 206, 86, 1)',
								// 'rgba(75, 192, 192, 1)',
								// 'rgba(153, 102, 255, 1)',
								'rgba(255, 159, 64, 1)',
							],
							borderWidth: 1,
						},

						// Temperature
						{
							label: 'Moisture',
							data: moistures,
							// backgroundColor: [
							// 	'rgba(255, 99, 132, 0.2)',
							// 	'rgba(54, 162, 235, 0.2)',
							// 	'rgba(255, 206, 86, 0.2)',
							// 	'rgba(75, 192, 192, 0.2)',
							// 	'rgba(153, 102, 255, 0.2)',
							// 	'rgba(255, 159, 64, 0.2)',
							// ],
							borderColor: [
								// 'rgba(255, 99, 132, 1)',
								// 'rgba(54, 162, 235, 1)',
								// 'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								// 'rgba(153, 102, 255, 1)',
								// 'rgba(255, 159, 64, 1)',
							],
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
		</div>
	);
};

export default LineChart;
