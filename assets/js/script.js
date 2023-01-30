// Query selectors
var currentDayEl = $('#currentDay')

// Current day 

var updateDate = function () {
    var currentDay = moment().format('dddd, MMMM Do')
    currentDayEl.text(currentDay)
    
}
setInterval(updateDate,1000)

// Color coding 
var timeArray = $('.time')
var liveTime = setInterval(function() {
    return moment().format('hA')
},1000)
console.log(moment().format('hA'))

for (var i = 0; i < timeArray.length; i++) {
    if (timeArray.eq(i).children().eq(0).text().trim() == liveTime) {
        
        
        timeArray.eq(i).children('textarea').css('background-color', '#D7263D')

        for (i+1 > i; i <timeArray.length; i++) {
            timeArray.eq(i+1).children('textarea').css('background-color', '#8CD867')
        } 
    
    } else {
        timeArray.eq(i).children('textarea').css('background-color', '#D6D1CD')
    }
}

// function to save to local storage 
function saveTostorage(event) {
    if (event) {
        var textFromTextArea = $(this).parent().children('textarea').val().trim()
        console.log(typeof textFromTextArea)
        if (textFromTextArea == "") {
            return
        } 
        localStorage.setItem("savedText", textFromTextArea)
            
        
        // console.log(textFromTextArea)
        
    }
    
    
    console.log(textFromTextArea)
}

// Event Listener 
$('.save').on('click', saveTostorage)


