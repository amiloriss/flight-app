const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const translateDate = (date) => {
    const dateArr = date.toString().split('-');
    const day = dateArr[2];
    const year = dateArr[0];
    const month = monthList[--dateArr[1]];
    return day + ' ' + month + ' ' + year;
};

export const translateDateForDepartureTime = (flighDate, flighTime) => {
    const time = flighTime.toString().slice(11, 16);
    const dateArr = flighDate.toString().slice(0, 10).split('-');
    const day = dateArr[2];
    const month = monthList[--dateArr[1]];
    const year = dateArr[0];
    return day + ' ' + month + ', ' + year + ' - ' + time;
};
