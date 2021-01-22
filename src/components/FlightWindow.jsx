import React, { useState } from 'react';
import FlightItem from './FlightItem';
import Carousel from './Carousel';

import { connect } from 'react-redux';
import { getFlightData } from '../actions/GetFlightData';
import { chooseDate } from '../date';

import calendarIcon from '../images/calendar.png';

const FlightWindow = ({ images, getFlightData, error, date, isFavTicket }) => {
	let [favCount, setFavCount] = useState(0);

	return (
		<div className='flight-container'>
			<div className='header'>
				<div className='departure-menu'>
					<div className='text'>Вылеты</div>
					<i style={{ color: '#999' }} className='fas fa-chevron-right'></i>
					<div className='direction'>SVO - JFK</div>
				</div>
				<div className='date-departure'>
					<div className='date'>{chooseDate(date)}</div>
					<div className='calendar-section'>
						<label htmlFor='calendar'>
							<img src={calendarIcon} alt='calendar-icon' />
							<input
								onChange={e => getFlightData(e.target.value)}
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
				Добавлено в избранное: <span className='fav-count'>{favCount}</span>{' '}
				рейсов
			</div>
			<div className='flight-list-wrapper'>
				{error ? (
					<p style={{ textAlign: 'center' }}>
						No tickets. Please choose another date.
					</p>
				) : (
					<ul className='list'>
						<FlightItem favCount={favCount} setFavCount={setFavCount} />
					</ul>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	
	return {
		images: state.filesReducer.images,
		date: state.flightData.date,
		error: state.flightData.error,
		isFavTicket: state.flightData.isFavTicket,
	};
};

export default connect(mapStateToProps, { getFlightData })(FlightWindow);
