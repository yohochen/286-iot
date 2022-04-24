import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { database } from './firebase';
// import { collection, query, where, getDocs } from 'firebase/firestore';

import LineChart from './components/LineChart';

// export default App;
function App() {
	const [data, setData] = useState([]);
	useEffect(() => {

		setData([]);
		const ref = database.ref('/humidity').limitToLast(100);
		ref.on('value', (snapshot) => {
			const info = snapshot.val();
			for (var id in info) {
				setData((data) => [...data, { id, ...info[id] }]);
				// if (
				// 	// check correct date (april & may)
				// 	info[id].time.startsWith('4/') ||
				// 	info[id].time.startsWith('5/')
				// ) {
				// 	setData((data) => [...data, { id, ...info[id] }]);
				// }
			}
		});
	}, []);

	return (
		<div >
			<div className='header' >IOT project</div>
			<LineChart data={data} />
		</div>
	);
}

export default App;
