import axios from 'axios';
import {
    SET_LOADING,
    GET_CARRIER,
    GET_PRICE,
    SET_DATE,
    GET_FLIGHT_TIME,
    SET_ERROR,
    SET_FAV,
} from './types';
import { chooseDate } from '../date';

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
            const flightTimeDeparture = res.data.Dates.OutboundDates[0].QuoteDateTime.toString().split(
                ''
            );
            // console.log(flightTimeDeparture);
            dispatch({ type: SET_DATE, payload: date });
            dispatch({
                type: GET_CARRIER,
                payload: res.data.Carriers[0].Name,
            });
            dispatch({
                type: GET_PRICE,
                payload: res.data.Dates.OutboundDates.map((el) => el.Price),
            });
            dispatch({
                type: GET_FLIGHT_TIME,
                payload: flightTimeDeparture,
            });
        })
        .catch(() => {
            dispatch({ type: SET_DATE, payload: date });
            dispatch({
                type: SET_ERROR,
            });
        });
};

export const addToFavTicket = () => {
    return { type: SET_FAV };
};

export const setLoading = () => {
    return { type: SET_LOADING };
};
