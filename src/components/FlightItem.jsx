import React from 'react';
import {connect} from 'react-redux';
const FlightItem = ({ planeIcon,  price,carrier,symbol }) => {

	return (
		<li className='list-item'>
			<div className='item-wrapper'>
				<div className='icon-section'>
					<div className='icon-wrapper'>
						<img src={planeIcon} alt='image' className='icon' />
					</div>
				</div>
				<div className='flight-direction'>
					Moscow (SVO) - New York City (JFK)
					Компания: {carrier}
				</div>
				<div className='price-section'>Цена: {price}₽</div>
			</div>
		</li>
	);
};

const mapStateToProps = (state)=>{
	return {
		carrier: state.flightData.carrier,
		price: state.flightData.price,
		planeIcon: state.filesReducer.planeIcon,
	}
}

export default connect(mapStateToProps)(FlightItem);
