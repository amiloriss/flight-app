import image1 from '../images/carousel/image-1.jpg';
import image2 from '../images/carousel/image-2.jpg';
import image3 from '../images/carousel/image-3.jpg';
import image4 from '../images/carousel/image-4.jpg';
import image5 from '../images/carousel/image-5.jpg';

import planeIcon from '../images/plane.png';

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

const initialState = {
    images,
    planeIcon,
};

const filesReducer = (state = initialState) => state;

export default filesReducer;
