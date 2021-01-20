import React, { useEffect } from 'react';
import FlightItem from './FlightItem';
import Carousel from './Carousel';

import { connect } from 'react-redux';
import { getFlightData } from '../actions/GetFlightData';

import { CircularProgress } from '@material-ui/core';

import calendarIcon from '../images/calendar.png';

const FlightWindow = ({ images, getFlightData, loading, error }) => {
    useEffect(() => {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        getFlightData([year, month, day].join('-'));
        // eslint-disable-next-line
    },
    
    []);

    return (
        <div className='flight-container'>
            <div className='header'>
                <div className='departure-menu'>
                    <div className='text'>Вылеты</div>
                    <i
                        style={{ color: '#999' }}
                        className='fas fa-chevron-right'></i>
                    <div className='direction'>SVO - JFK</div>
                </div>
                <div className='date-departure'>
                    <div className='date'>{}07 июля 2020</div>
                    <div className='calendar-section'>
                        <label htmlFor='calendar'>
                            <img src={calendarIcon} alt='calendar-icon' />
                            <input
                                onChange={(e) => getFlightData(e.target.value)}
                                className='calendar'
                                id='calendar'
                                type='date'
                            />
                        </label>
                    </div>
                </div>
            </div>
            <Carousel data={images} />
            <div className='favourite-flight'>
                Добавлено в избранное: <span>10</span> рейсов
            </div>
            <div className='flight-list-wrapper'>
                {error ? (
                    <p style={{textAlign: 'center'}}>No tickets. Please choose another date.</p>
                ) : loading ? (
                    <CircularProgress
                        style={{ display: 'block', margin: '0 auto' }}
                    />
                ) : (
                    <ul className='list'>
                        <FlightItem />
                    </ul>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        images: state.filesReducer.images,
        loading: state.flightData.loading,
        error: state.flightData.error,
    };
};

export default connect(mapStateToProps, { getFlightData })(FlightWindow);
