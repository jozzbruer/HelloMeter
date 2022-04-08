import React, { useContext } from 'react';
import Cards from '../cards/Cards';
import CountUp from 'react-countup';
import Chart from '../chart/Chart';
import { dataContext } from '../context/dataContextProvider';

import './home.css';
import Barchart from '../chart/BarChart';

const Home = () => {
	const {
		data,
		getPreOrdered,
		getNonPreOrdered,
		getSumWaitingTimeNonPreOrdered,
		getSumWaitingTimePreOrdered,
	} = useContext(dataContext);
	const arrValue = [
		{
			value: getNonPreOrdered().length,
		},
		{
			value: getPreOrdered().length,
		},
	];

	const valueData = [
		{
			PreOrdered: getSumWaitingTimePreOrdered(),
		},
		{
			NonPreOrdered: getSumWaitingTimeNonPreOrdered(),
		},
	];

	return (
		<div className='container'>
			<div className='overview'>
				<h1>Overview</h1>
				<div className='row overview-box'>
					<div className='col-12 col-lg-4'>
						<Cards className='card-overview'>
							<div>
								<h2>
									<CountUp end={getPreOrdered().length} duration={1} />
								</h2>
								<p>Pre-Ordered</p>
							</div>
						</Cards>
					</div>
					<div className='col-12 col-lg-4'>
						<Cards className='card-overview'>
							<div>
								<h2>
									<CountUp end={getNonPreOrdered().length} duration={1} />
								</h2>
								<p> Non Pre-Ordered</p>
							</div>
						</Cards>
					</div>
					<div className='col-12 col-lg-4'>
						<Cards className='card-overview'>
							<div>
								<h2>
									<CountUp end={data.length} duration={1} />
								</h2>
								<p>Total of Orders</p>
							</div>
						</Cards>
					</div>
				</div>
			</div>
			<hr />

			<div className='row data-view'>
				<div className='col-12 col-lg-6'>
					<Cards className='card-overview-chart'>
						{' '}
						<Chart data={arrValue} />{' '}
					</Cards>
				</div>
				<div className='col-12 col-lg-6'>
					<Cards className='card-overview-chart'>
						<Barchart data={valueData} />
					</Cards>
				</div>
			</div>
		</div>
	);
};

export default Home;
