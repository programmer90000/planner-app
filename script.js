function getCurrentDate() {
    day = dayjs().day(); // Gets current day
    if (day === 0) {
        day = "Sunday"
    } else if (day === 1) {
        day = "Monday"
    } else if (day === 2) {
        day = "Tuesday"
    } else if (day === 3) {
        day = "Wednesday"
    } else if (day === 4) {
        day = "Thursday"
    } else if (day === 5) {
        day = "Friday"
    } else if (day === 6) {
        day = "Saturday"
    }

    month = dayjs().month() // Gets current month
    if (month === 0) {
        month = "January";
    } else if (month === 1) {
        month = "Febuary";
    } else if (month === 2) {
        month = "March";
    } else if (month === 3) {
        month = "April";
    } else if (month === 4) {
        month = "May";
    } else if (month === 5) {
        month = "June";
    } else if (month === 6) {
        month = "July";
    } else if (month === 7) {
        month = "August";
    } else if (month === 8) {
        month = "September";
    } else if (month === 9) {
        month = "October";
    } else if (month === 10) {
        month = "November";
    } else if (month === 11) {
        month = "December";
    };

    date = dayjs().date() // Gets current date of current month

    let currentDate = `${day}, ${month} ${date}th`
    document.getElementById("currentDay").textContent = currentDate;
}
getCurrentDate();