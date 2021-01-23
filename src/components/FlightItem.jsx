import React from 'react';
import { connect } from 'react-redux';

import {addToFavTicket} from '../actions/GetFlightData'

const FlightItem = ({ planeIcon, price, carrierId, carrierName, isFavTicket, addToFavTicket, flightTime, setFavCount, favCount }) => {
    return (
        <li key={carrierId} className='list-item'>
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
                    <div className='date'>{flightTime}</div>
                    <div className='company'>{carrierName}</div>
                </div>

                <div className='price-section'>
                    <div className='favourite-flight'>
                        <i
                            onClick={()=>{addToFavTicket() && setFavCount(isFavTicket ? favCount-1 : favCount+1)}}
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

    return {
        carrierId: state.flightData.carrierId,
        carrierName: state.flightData.carrierName,
        price: state.flightData.price,
        planeIcon: state.filesReducer.planeIcon,
        isFavTicket: state.flightData.isFavTicket,
        date: state.flightData.date,
        flightTime: state.flightData.flightTime
    };
};

export default connect(mapStateToProps, {addToFavTicket})(FlightItem);
