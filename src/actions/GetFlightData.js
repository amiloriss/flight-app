import axios from 'axios';
import { GET_DATA } from './types';

const getFLightData = () => dispatch => {
	const res = axios.get('');
	dispatch({});
};

export default getFLightData;
