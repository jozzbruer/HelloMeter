import axios from 'axios';
import { useEffect, useState } from 'react';

export const useResource = (resourceUrl) => {
	const [resource, setResource] = useState([]);

	const getResource = async () => {
		try {
			const response = await axios.get(resourceUrl);
			const data = response.data;
			setResource(data);
		} catch (error) {
			console.log('error ', error);
		}
	};
	useEffect(() => {
		getResource();
	}, [resourceUrl]);
	return resource;
};
