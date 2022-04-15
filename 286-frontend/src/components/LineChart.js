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

	const slicedData = props.data.slice(-200);
	for (var id in slicedData) {
		// getting the latest 100 datapoint, subject to change
		timeLabels.push(slicedData[id].time);
		humidities.push(slicedData[id].humidity);
		moistures.push(slicedData[id].moisture);
		temperatures.push(slicedData[id].temperature);
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
							borderColor: 'blue',
							borderWidth: 1,
						},

						// Temperature
						{
							label: 'Temperature',
							data: temperatures,
							borderColor: 'rgba(255, 159, 64, 1)',
							borderWidth: 1,
						},

						// Temperature
						{
							label: 'Moisture',
							data: moistures,
							borderColor: 'rgba(75, 192, 192, 1)',
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
