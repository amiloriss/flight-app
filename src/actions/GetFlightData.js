import axios from 'axios';
import {
    SET_LOADING,
    GET_CARRIER,
    GET_PRICE,
    SET_DATE,
    SET_ERROR,
} from './types';

export const getFlightData = (date) => (dispatch) => {
    setLoading();
    const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/SVO/JFK/${date}`,
        params: { inboundpartialdate: 'anytime' },
        headers: {
            'x-rapidapi-key':
                '062239caa8msh26399be7449862ep1807e6jsna5398d049e8f',
            'x-rapidapi-host':
                'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        },
    };

    axios
        .request(options)
        .then((res) => {
            dispatch({ type: SET_DATE, payload: date });
            dispatch({
                type: GET_CARRIER,
                payload: res.data.Carriers[0].Name,
            });
            dispatch({
                type: GET_PRICE,
                payload: res.data.Dates.OutboundDates.map((el) => el.Price),
            });
        })
        .catch(() => {
            dispatch({
                type: SET_ERROR,
            });
        });
};

export const setLoading = () => {
    return { type: SET_LOADING };
};
