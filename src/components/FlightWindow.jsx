import React, { useState } from 'react';
import FlightItem from './FlightItem';
import Carousel from './Carousel';

import { connect } from 'react-redux';
import { getFlightData } from '../actions/GetFlightData';
import { translateDate } from '../date';

const FlightWindow = ({ images, getFlightData, error, date }) => {
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
					<div className='date'>{translateDate(date)}</div>
					<div className='calendar-section'>
						<div className="calendar-wrapper">
							<input
								onChange={e => getFlightData(e.target.value)}
								className='calendar'
								id='calendar'
								type='date'
							/>
						</div>
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
	};
};

export default connect(mapStateToProps, { getFlightData })(FlightWindow);
