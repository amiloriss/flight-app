import axios from 'axios';
import { GET_DATA } from './types';

const getFLightData = () => async dispatch => {
	var options = {
		method: 'GET',
		url:
			'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/SVO/JFK/2021-02-01',
		params: { inboundpartialdate: '2019-12-01' },
		headers: {
			'x-rapidapi-key': '062239caa8msh26399be7449862ep1807e6jsna5398d049e8f',
			'x-rapidapi-host':
				'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then(res => {
			console.log(res.data);
			dispatch({ type: GET_DATA, payload: res.data });
		})
		.catch(error => {
			console.error(error);
		});
};

export default getFLightData;
