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

export const chooseDate = (date) => {
    const dateArr = date.toString().split('-');
    const day = dateArr[2];
    const year = dateArr[0];
    if (dateArr[1].charAt(0) == 0) {
        const month = monthList[--dateArr[1].split('')[1]];
        return day + ' ' + month + ' ' + year;
    }
};
