function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / (1000 * 60)) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daySpan = clock.querySelector(".days");
    var hourSpan = clock.querySelector(".hours");
    var minuteSpan = clock.querySelector(".minutes");
    var secondSpan = clock.querySelector(".seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);
        daySpan.innerHTML = t.days;
        hourSpan.innerHTML = ('0' + t.hours).slice(-2);
        minuteSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 10 * 1000);
initializeClock('clockdiv', deadline);