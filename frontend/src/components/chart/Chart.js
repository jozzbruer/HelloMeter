import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import './chart.css';

const COLORS = ['#4d43b5', '#bcc0dd'];
const arrLabel = ['Non Pre-Ordered', 'Pre-Ordered'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='black'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
const Chart = (props) => {
	return (
		<>
			<div className='chart-view'>
				<h5>Percentage of Pre Ordered and Non Pre-Ordered</h5>
				<PieChart className='piechart' width={200} height={250}>
					<Pie
						data={props.data}
						cx={'50%'}
						cy={'50%'}
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80}
						dataKey='value'
						cursor='pointer'>
						{props.data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
				{arrLabel.map((d, idx) => (
					<div key={`cell-${idx}`} className='chart-tagline'>
						<div
							className='chart-tagline__box'
							style={{ backgroundColor: COLORS[idx] }}></div>
						<div>{arrLabel[idx]}</div>
						<br />
					</div>
				))}
			</div>
		</>
	);
};

export default Chart;
