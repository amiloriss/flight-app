import React, { useEffect } from 'react';
import FlightItem from './FlightItem';
import Carousel from './Carousel';

import { connect } from 'react-redux';
import flightData from '../actions/GetFlightData';

import planeIcon from '../images/plane.png';
import calendarIcon from '../images/calendar.png';

import image1 from '../images/carousel/image-1.jpg';
import image2 from '../images/carousel/image-2.jpg';
import image3 from '../images/carousel/image-3.jpg';
import image4 from '../images/carousel/image-4.jpg';
import image5 from '../images/carousel/image-5.jpg';

const images = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image1,
	image2,
	image3,
	image4,
	image5,
];

const data = [
	{
		id: 1,
		img: planeIcon,
		from: 'Moscow (SVO)',
		to: 'New York City (JFK)',
		date: '28 june, 2020 - 14:50',
		company: 'Aeroflot',
		price: 20000,
	},
	{
		id: 2,
		img: planeIcon,
		from: 'Moscow (SVO)',
		to: 'New York City (JFK)',
		date: '28 june, 2020 - 14:50',
		company: 'Aeroflot',
		price: 20000,
	},
	{
		id: 3,
		img: planeIcon,
		from: 'Moscow (SVO)',
		to: 'New York City (JFK)',
		date: '28 june, 2020 - 14:50',
		company: 'Aeroflot',
		price: 20000,
	},
	{
		id: 4,
		img: planeIcon,
		from: 'Moscow (SVO)',
		to: 'New York City (JFK)',
		date: '28 june, 2020 - 14:50',
		company: 'Aeroflot',
		price: 20000,
	},
	{
		id: 5,
		img: planeIcon,
		from: 'Moscow (SVO)',
		to: 'New York City (JFK)',
		date: '28 june, 2020 - 14:50',
		company: 'Aeroflot',
		price: 20000,
	},
];

const FlightWindow = () => {
	useEffect(() => {
		flightData();
	}, []);
	return (
		<div className='flight-container'>
			<div className='header'>
				<div className='departure-menu'>
					<div className='text'>Вылеты</div>
					<i style={{ color: '#999' }} className='fas fa-chevron-right'></i>
					<div className='direction'>SVO - JFK</div>
				</div>
				<div className='date-departure'>
					<div className='date'>07 июля 2020</div>
					<div className='calendar-section'>
						<label htmlFor='calendar'>
							<img src={calendarIcon} alt='calendar-icon' />
							<input className='calendar' id='calendar' type='date' />
						</label>
					</div>
				</div>
			</div>
			<Carousel data={images} />
			<div className='favourite-flight'>
				Добавлено в избранное: <span>10</span> рейсов
			</div>
			<div className='flight-list-wrapper'>
				<ul className='list'>
					{data.map(el => (
						<FlightItem key={el.id} {...el} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default connect(null, flightData)(FlightWindow);
