import React, {useEffect} from 'react';
import FlightWindow from '../components/FlightWindow';
import { CircularProgress } from '@material-ui/core';
import { getFlightData } from '../actions/GetFlightData';
import { connect } from 'react-redux';

const FlightPage = ({loading, getFlightData}) => {
	const todayDate = () => {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day];
    };
    useEffect(() => {
        getFlightData(todayDate().join('-'));
    }, []);
    return (
        <div className='flight-page'>
            {loading ? (
                <CircularProgress
                    style={{ display: 'block', margin: '0 auto' }}
                />
            ) : (
                <FlightWindow />
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.flightData.loading,
    };
};

export default connect(mapStateToProps, {getFlightData})(FlightPage);
