// Query selectors
var currentDayEl = $('#currentDay')

// Current day 

var updateDate = function () {
    var currentDay = moment().format('dddd, MMMM Do')
    currentDayEl.text(currentDay)
    
}

setInterval(updateDate,1000)
