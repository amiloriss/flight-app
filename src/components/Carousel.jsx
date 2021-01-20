import React from 'react';

const Carousel = ({ data }) => {
	return (
		<div className='carousel-wrapper'>
			<ul style={{ width: data.length * 175 + 'px' }} className='carousel-list'>
				{data.map(el => (
					<li className='carousel-item'>
						<img className='carousel-image' src={el} alt='pic' />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Carousel;
