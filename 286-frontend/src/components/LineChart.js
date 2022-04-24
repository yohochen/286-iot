import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

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
	var pressures = [];
	var humidities = [];
	var tempHigh = Number.MIN_SAFE_INTEGER;
	var tempLow = Number.MAX_SAFE_INTEGER;

	var moistHigh = Number.MIN_SAFE_INTEGER;
	var moistLow = Number.MAX_SAFE_INTEGER;

	var pHigh = Number.MIN_SAFE_INTEGER;
	var pLow = Number.MAX_SAFE_INTEGER;

	var hHigh = Number.MIN_SAFE_INTEGER;
	var hLow = Number.MAX_SAFE_INTEGER;

	var moistHigh = Number.MIN_SAFE_INTEGER;
	var moistLow = Number.MAX_SAFE_INTEGER;

	// const slicedData = props.data.slice(-200);
	const slicedData = props.data;
	for (var id in slicedData) {
		// getting the latest 100 datapoint, subject to change
		timeLabels.push(slicedData[id].time);
		// humidities.push(slicedData[id].humidity);
		moistures.push(slicedData[id].moisture / 5);
		temperatures.push(slicedData[id].temperature * 1.8 + 32); // get Fahrenheit from Celsius
		pressures.push(slicedData[id].humidity);
		humidities.push(slicedData[id].pressure);

		tempHigh = Math.max(tempHigh, slicedData[id].temperature * 1.8 + 32);
		tempLow = Math.min(tempLow, slicedData[id].temperature * 1.8 + 32);
		moistHigh = Math.max(moistHigh, slicedData[id].moisture);
		moistLow = Math.min(moistLow, slicedData[id].moisture);
		pHigh = Math.max(pHigh, slicedData[id].pressure);
		pLow = Math.min(pLow, slicedData[id].pressure);
		hHigh = Math.max(hHigh, slicedData[id].humidity);
		hLow = Math.min(hLow, slicedData[id].humidity);
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "80%", margin: "0 auto" }}>
			<div style={{ width: "80%", margin: "20px auto" }}>
				<Line
					data={{
						labels: timeLabels,
						datasets: [

							// Temperature
							{
								label: 'Temperature',
								data: temperatures,
								borderColor: 'rgba(207, 60, 155)',
								backgroundColor: 'rgba(237, 81, 182)',
								borderWidth: 2,
							},

							// Moisture
							{
								label: 'moistures',
								data: moistures,
								borderColor: 'rgba(35, 196, 97)',
								backgroundColor: 'rgba(56, 235, 125)',
								borderWidth: 2,
							},
							{
								label: 'pressures',
								data: pressures,
								borderColor: 'rgba(36, 93, 199)',
								backgroundColor: 'rgba(71, 129, 237)',
								borderWidth: 2,
							},
							{
								label: 'humidities',
								data: humidities,
								borderColor: 'rgba(214, 61, 34)',
								backgroundColor: 'rgba(245, 118, 95)',
								borderWidth: 2,
							},
						],
					}}
					height={300}
					width={500}
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
			<div style={{ margin: "0 auto" }}>
				<div className='row'>
					<div className='col '>
						<Card
							style={{
								width: '18rem',
								backgroundColor: 'rgba(237, 81, 182)',
								color: 'white',
							}}
						>
							<Card.Body>
								<Card.Title>Recent Temperature Range</Card.Title>
								<Card.Text>
									{tempLow == Number.MAX_SAFE_INTEGER
										? ''
										: tempLow.toFixed(1) + '°F'}{' '}
									~{' '}
									{tempHigh == Number.MIN_SAFE_INTEGER
										? ''
										: tempHigh.toFixed(1) + '°F'}
								</Card.Text>
							</Card.Body>
						</Card>
					</div>

					<div className='col'>
						<Card
							style={{
								width: '18rem',
								backgroundColor: 'rgba(35, 196, 97)',
								color: 'white',
							}}
						>
							<Card.Body>
								<Card.Title>Recent Moisture Range</Card.Title>
								<Card.Text>
									{moistLow == Number.MAX_SAFE_INTEGER
										? ''
										: moistLow.toFixed(1)}{' '}
									~{' '}
									{moistHigh == Number.MIN_SAFE_INTEGER
										? ''
										: moistHigh.toFixed(1)}
								</Card.Text>
							</Card.Body>
						</Card>
					</div>

					<div className='col'>
						<Card
							style={{
								width: '18rem',
								backgroundColor: 'rgba(71, 129, 237)',
								color: 'white',
							}}
						>
							<Card.Body>
								<Card.Title>Recent Pressure Range</Card.Title>
								<Card.Text>
									{pLow == Number.MAX_SAFE_INTEGER
										? ''
										: pLow.toFixed(1)}{' '}
									~{' '}
									{pHigh == Number.MIN_SAFE_INTEGER
										? ''
										: pHigh.toFixed(1)}
								</Card.Text>
							</Card.Body>
						</Card>
					</div>

					<div className='col'>
						<Card
							style={{
								width: '18rem',
								backgroundColor: 'rgba(245, 118, 95)',
								color: 'white',
							}}
						>
							<Card.Body>
								<Card.Title>Recent Humidity Range</Card.Title>
								<Card.Text>
									{hLow == Number.MAX_SAFE_INTEGER
										? ''
										: hLow.toFixed(1)}{' '}
									~{' '}
									{hHigh == Number.MIN_SAFE_INTEGER
										? ''
										: hHigh.toFixed(1)}
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>


			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ display: "flex", flexDirection: "row", height: "600px", justifyContent: "space-between" }}>
					<div style={{ width: "45%", height: "500px", margin: "50px auto" }}>
						<Line
							data={{
								labels: timeLabels,
								datasets: [

									// Temperature
									{
										label: 'Temperature',
										data: temperatures,
										borderColor: 'rgba(207, 60, 155)',
										backgroundColor: 'rgba(237, 81, 182)',
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
										beginAtZero: false,
									},
								},
							}}
						/>
					</div>
					<div style={{ width: "45%", height: "500px", margin: "50px auto" }}>
						<Line
							data={{
								labels: timeLabels,
								datasets: [

									// Moisture
									{
										label: 'moistures',
										data: moistures,
										borderColor: 'rgba(35, 196, 97)',
										backgroundColor: 'rgba(56, 235, 125)',
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
										beginAtZero: false,
									},
								},
							}}
						/>
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "row", height: "600px", justifyContent: "space-between" }}>
					<div style={{ width: "45%", height: "500px", margin: "50px auto" }}>
						<Line
							data={{
								labels: timeLabels,
								datasets: [

									// Temperature
									{
										label: 'pressures',
										data: pressures,
										borderColor: 'rgba(36, 93, 199)',
										backgroundColor: 'rgba(71, 129, 237)',
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
										beginAtZero: false,
									},
								},
							}}
						/>
					</div>
					<div style={{ width: "45%", height: "500px", margin: "50px auto" }}>
						<Line
							data={{
								labels: timeLabels,
								datasets: [

									{
										label: 'humidities',
										data: humidities,
										borderColor: 'rgba(214, 61, 34)',
										backgroundColor: 'rgba(245, 118, 95)',
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
										beginAtZero: false,
									},
								},
							}}
						/>
					</div>
				</div>
			</div>

		</div>
	);
};

export default LineChart;
