import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlightWindow from '../components/FlightWindow';
import { CircularProgress } from '@material-ui/core';
import { getFlightData } from '../actions/GetFlightData';
import { connect } from 'react-redux';

const FlightPage = ({ loading, getFlightData, logoutIcon }) => {
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
				<CircularProgress style={{ display: 'block', margin: '0 auto' }} />
			) : (
				<>
					<FlightWindow />
					<Link to='/'>
						<div
							style={{
								float: 'right',
								marginTop: '23px',
								marginRight: '26px',
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<span
								style={{
									fontFamily: 'SF Pro Text',
									fontWeight: '400',
									fontSize: '20px',
									color: '#1157A7',
									marginRight: '15px',
								}}
							>
								Выйти
							</span>{' '}
							<img src={logoutIcon} alt='logout' />
						</div>
					</Link>
				</>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.flightData.loading,
		logoutIcon: state.filesReducer.logoutIcon,
	};
};

export default connect(mapStateToProps, { getFlightData })(FlightPage);
