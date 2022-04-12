import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { auth, firestore, database } from './firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// export default App;
function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const ref = database.ref('/humidity');
		ref.on('value', (snapshot) => {
			const info = snapshot.val();
			for (var id in info) {
				if (
					// check correct date
					info[id].time.startsWith('4/') ||
					info[id].time.startsWith('5/')
				) {
					setData((data) => [...data, { id, ...info[id] }]);
				}
			}
		});
	}, []);

	return (
		<div className='container'>
			<h3 className='p-3 text-center'>React - Display a list of items</h3>
			<table className='table table-striped table-bordered'>
				<thead>
					<tr>
						<th>Time</th>
						<th>Moisture</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{data.map((d) => (
						<tr key={d.id}>
							<td>{d.time}</td>
							<td>{d.moisture}</td>
							<td>{d.humidity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
