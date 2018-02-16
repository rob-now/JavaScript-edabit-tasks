function timeForMilkAndCookies(date) {
    if (date.getMonth() === 11 && date.getDate() === 24) {
        return true;
    }
    return false;
}

console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));