import React from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import './chart.css';

const Barchart = (props) => {
	return (
		<>
			<div className='chart-view'>
				<h5>Waiting time average per category</h5>
				<BarChart
					width={400}
					height={350}
					data={props.data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barSize={20}>
					<CartesianGrid strokeDasharray='3 3' />

					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='PreOrdered' fill='#4d43b5' />
					<Bar dataKey='NonPreOrdered' fill='#bcc0dd' />
				</BarChart>
			</div>
		</>
	);
};

export default Barchart;
