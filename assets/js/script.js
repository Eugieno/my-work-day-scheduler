// Query selector
var currentDayEl = $('#currentDay')

// Current day - updated in the Header section
var updateDate = function () {
    var currentDay = moment().format('dddd, MMMM Do')
    currentDayEl.text(currentDay)
    
}
setInterval(updateDate,1000)

// Color coding 

var timeArray = $('.time')
for (var i = 0; i < timeArray.length; i++) {
    if (timeArray.eq(i).children().eq(0).text().trim() == moment().format('hA')) {
        
        
        timeArray.eq(i).children('textarea').css('background-color', '#D7263D')

        for (i+1 > i; i <timeArray.length; i++) {
            timeArray.eq(i+1).children('textarea').css('background-color', '#8CD867')
        } 
    
    } else {
        timeArray.eq(i).children('textarea').css('background-color', '#D6D1CD')
    }
}

// Event Handler - function 
function saveTostorage(event) {
    if (event) {
        if (textFromTextArea == "") {
            return
        }
        if ($(this).attr('id')) {
        
            var textFromTextArea = $(this).parent().children('textarea').val().trim();
            var accessKey = $(this).attr('id')
            localStorage.setItem(accessKey, textFromTextArea);
        }
     
        
    }
    
    
 
}

// Event Listener 
$('.save').on('click', saveTostorage)