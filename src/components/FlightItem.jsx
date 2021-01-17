import React from 'react';

const FlightItem = ({ company, date, img, from, to, price }) => {
	return (
		<li className='list-item'>
			<div className='item-wrapper'>
				<div className='icon-section'>
					<div className='icon-wrapper'>
						<img src={img} alt='image' className='icon' />
					</div>
				</div>
				<div className='flight-direction'>
					{from}
					{to}
				</div>
				<div className='price-section'>{price}</div>
			</div>
		</li>
	);
};

export default FlightItem;
