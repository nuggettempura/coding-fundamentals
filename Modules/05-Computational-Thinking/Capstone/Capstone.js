//make an object for start and end dates
function numberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

//formula for calculating hours in milliseconds
const hoursADay = 1000 * 60 * 60 * 24; //milliseconds * 60 seconds * 60 minutes * 24 hours

//calculating time difference between two dates
const differenceInTime = date2.getTime() - date1.getTime();

//calculating number of days between the two dates
const differenceInDays = Math.round(differenceInTime / hoursADay);

return differenceInDays;
}
console.log(numberOfDays("2021/01/02", "2022/01/03"));
