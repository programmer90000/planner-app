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

function createTimeBlocks() {
    let saveBtn = document.getElementsByClassName("save");
    let write = document.getElementsByClassName("text");

    function getData() {
        for (let i = 0; i < saveBtn.length; i++) {
            let data = localStorage.getItem("Value" + i);
            if (data) {
                write[i].value = data;
            }
        }
    }

    // When the page loads, display any information currently in the loacal storage
    window.onload = getData();

    // When the user clicks the save button, save the date to the local storage
    for (let i = 0; i < saveBtn.length; i++) {
        saveBtn[i].addEventListener('click', function () {
            text = write[i].value;
            localStorage.setItem("Value" + i, text);
            }
        )
    };

    let currentHour = dayjs().hour();

    let textBlocks = document.querySelectorAll(".time-block .write .text");

    // Change the colour the text boxes depending on the time
    for (let i = 9; i <= 17; i++) {
        if (i < currentHour) {
            textBlocks[i-9].style.backgroundColor = "#CCCCCC";
        } else if (i === currentHour) {
            textBlocks[i-9].style.backgroundColor = "#F14D57";
        } else if (i > currentHour) {
            textBlocks[i-9].style.backgroundColor = "#75E86F";
        };
    };
};

getCurrentDate();
createTimeBlocks();


/* Display text when the save button is pressed */
let saveBtn = document.getElementsByClassName("save");
for (let i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', function () {
        let header = document.getElementsByClassName('container')[0];
        let h1Tag = document.createElement("p");
        h1Tag.innerText = "Appointment added to";
        h1Tag.insertAdjacentHTML('beforeend', `<span style="color: red"> localstorage</span>✅`);
        h1Tag.style.textAlign = "center";
        header.prepend(h1Tag);
    })
};