import React from 'react';
import { connect } from 'react-redux';

import {addToFavTicket} from '../actions/GetFlightData'

const FlightItem = ({ planeIcon, price, carrier, isFavTicket, addToFavTicket }) => {
    return (
        <li className='list-item'>
            <div className='item-wrapper'>
                <div className='icon-section'>
                    <div className='icon-wrapper'>
                        <img src={planeIcon} alt='icon' className='icon' />
                    </div>
                </div>
                <div className='flight-direction-wrapper'>
                    <div className='flight-direction'>
                        Moscow (SVO) - New York City (JFK)
                    </div>

                    <div className='date'>28 june - 2021</div>
                    <div className='company'>{carrier}</div>
                </div>

                <div className='price-section'>
                    <div className='favourite-flight'>
                        <i
                            onClick={addToFavTicket}
                            style={{ color: isFavTicket && 'red' }}
                            className={`${
                                isFavTicket ? 'fas' : 'far'
                            } fa-heart unlike`}></i>
                    </div>
                    <div className='text'>Price:</div>{' '}
                    <div className='price'> {price} ₽</div>
                </div>
            </div>
        </li>
    );
};

const mapStateToProps = (state) => {
    console.log(state.flightData)
    return {
        carrier: state.flightData.carrier,
        price: state.flightData.price,
        planeIcon: state.filesReducer.planeIcon,
        isFavTicket: state.flightData.isFavTicket
    };
};

export default connect(mapStateToProps, {addToFavTicket})(FlightItem);
