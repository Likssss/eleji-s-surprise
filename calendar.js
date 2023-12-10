var title = document.getElementById('title');
title.innerHTML = "December 2023";

var date = new Date();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var christmasDay = 25;
var today = date.getDate();

var calendar = document.getElementById('calendar');

// Pre-defined notes for each day
var notes = {
    1: "Note for December 1",
    2: "Note for December 2",
    // ...
    25: "Merry Christmas!",
    // ...
    31: "Note for December 31"
};

for (var i = 1; i <= 31; i++) {
    var day = document.createElement('div');
    day.classList.add('day');
    day.dataset.dayNumber = i; // Store the day number

    if (i === christmasDay && month === 12) {
        day.innerHTML = "&#127873;"; // Use HTML entity for the present emoji
        day.style.color = "red"; // Make the present icon red
    } else {
        day.innerHTML = i;
    }

    if (i > today) {
        day.classList.add('future');
        day.onclick = function() {
            var dayNumber = parseInt(this.dataset.dayNumber);
            var daysLeft = dayNumber - today;
            alert("You have to wait " + daysLeft + " days before you can open it.");
        };
    } else {
        day.onclick = function() {
            var dayNumber = parseInt(this.dataset.dayNumber);
            var note = notes[dayNumber];
            if (note) {
                alert(note);
            }
        };
    }

    // Add color to Sundays and Saturdays
    var weekday = new Date(year, month - 1, i).getDay();
    if (weekday === 4) { // Sunday
        day.style.color = "red";
    } else if (weekday === 3) { // Saturday
        day.style.color = "grey";
    }

    calendar.appendChild(day);
}

