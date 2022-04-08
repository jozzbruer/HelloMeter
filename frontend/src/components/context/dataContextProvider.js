import React, { createContext } from 'react';
import { useResource } from '../../hooks/useResource';

export const dataContext = createContext();
const DataContextProvider = (props) => {
	const productionUrl = 'https://hellometertest.herokuapp.com/api/v1/data';
	const developmentUrl = 'http://localhost:3001/api/v1/data';

	const orders = useResource(productionUrl);

	const getPreOrdered = () => {
		let getPreOrdered = [];
		for (let i = 0; i < orders.length; i++) {
			if (orders[i].pre_ordered === 'true') {
				getPreOrdered.push(orders[i]);
			}
		}

		return getPreOrdered;
	};

	const getNonPreOrdered = () => {
		let getNonPreOrdered = [];
		for (let i = 0; i < orders.length; i++) {
			if (orders[i].pre_ordered === 'false') {
				getNonPreOrdered.push(orders[i]);
			}
		}

		return getNonPreOrdered;
	};

	const getSumWaitingTimeNonPreOrdered = () => {
		let res = orders.filter((data) => data.pre_ordered === 'false');
		let total = res.reduce((sum, data) => sum + data.waiting_time, 0);
		const average = total / res.length;

		return average;
	};

	const getSumWaitingTimePreOrdered = () => {
		let res = orders.filter((data) => data.pre_ordered === 'true');
		let total = res.reduce((sum, data) => sum + data.waiting_time, 0);
		const average = total / res.length;

		return average;
	};

	return (
		<dataContext.Provider
			value={{
				data: orders,
				getPreOrdered,
				getNonPreOrdered,
				getSumWaitingTimeNonPreOrdered,
				getSumWaitingTimePreOrdered,
			}}>
			{props.children}
		</dataContext.Provider>
	);
};

export default DataContextProvider;
