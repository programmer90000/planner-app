function getCurrentDate() {
    day = dayjs().day(); // Gets current day

    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Error";
    }

    month = dayjs().month() // Gets current month
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "Febuary";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    date = dayjs().date() // Gets current date of current month

    let currentDate = `${day}, ${month} ${date}th`
    $("#currentDay").text(currentDate);
}

function createTimeBlocks() {
    let saveBtn = $(".save");
    let write = $(".text");

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


//Display text when the save button is pressed
let saveBtn = $(".save");
for (let i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', function () {
        let header = $(".container:first").get(0);
        let h1 = header.querySelector("p");
        if (h1) {
            h1.remove();
        }
        let h1Tag = document.createElement("p");
        h1Tag.innerText = "Appointment added to";
        h1Tag.insertAdjacentHTML('beforeend', `<span style="color: red"> localstorage</span>✅`);
        h1Tag.style.textAlign = "center";
        header.prepend(h1Tag);

        setTimeout(() => {
            h1Tag.style.display = "none";
        }, 3000);
    })
};