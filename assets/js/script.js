// Query selectors
var currentDayEl = $('#currentDay')

// Current day - updated in the Header section

var updateDate = function () {
    var currentDay = moment().format('dddd, MMMM Do')
    currentDayEl.text(currentDay)
    
}
setInterval(updateDate,1000)


// Color coding 

// Running hour
var liveTime = setInterval(function() {
    return moment().format('hA')
},1000)

// ................ I want to use liveTime (running hour) to test the conditon in line 27
// ............... I'm not getting the expected value from the liveTime function above
// .............  The color coding logic below has been tested for all time and works fine.
// It's being tested at liveTime = '9AM' in its prsent form.
var timeArray = $('.time')
for (var i = 0; i < timeArray.length; i++) {
    if (timeArray.eq(i).children().eq(0).text().trim() == '9AM') {
        
        
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
        var textFromTextArea = $(this).parent().children('textarea').val().trim();

        // var textFromTextArea = {
        //     yourText: $(this).parent().children('textarea').val().trim(),
        //     yourKey: $(this).attr('id'),
        // } 
        // var textER = textFromTextArea.yourKey
        // var itemArr = localStorage.getItem(textER) || []

        
        // itemArr.push(textFromTextArea.yourText)

        // console.log(typeof textFromTextArea)
        // // itemArr.push(textFromTextArea)
        // localStorage.setItem(textER, itemArr)
        // // localStorage.setItem(textER, JSON.stringify(textFromTextArea.yourText))
        if (textFromTextArea == "") {
            return
        }
        if ($(this).attr('id') == "button-1") {
            var existingItems = localStorage.getItem('9AM-log') || []
            
            localStorage.setItem("9AM-log", JSON.stringify(textFromTextArea))
            
        } else if ($(this).attr('id') == "button-2") {
            localStorage.setItem("10AM-log", textFromTextArea)
        } else if ($(this).attr('id') == "button-3") {
            localStorage.setItem("11AM-log", textFromTextArea)
        } else if ($(this).attr('id') == "button-4") {
            localStorage.setItem("12PM-log", textFromTextArea)
        } else if ($(this).attr('id') == "button-5") {
            localStorage.setItem("1PM-log", textFromTextArea)
        } else if ($(this).attr('id') == "button-6") {
            localStorage.setItem("2PM-log", textFromTextArea)
        } else if ($(this).attr('id') == "button-7") {
            localStorage.setItem("3PM-log", textFromTextArea)
        } else if ($(this).attr('id') == "button-8") {
            localStorage.setItem("4PM-log", textFromTextArea)
        } else {
            localStorage.setItem("5PM-log", textFromTextArea)
        // }
        
            
        // $("[attribute=value]")
        // console.log(textFromTextArea)
        
    }
    
    
 
}

}

// Event Listener 
$('.save').on('click', saveTostorage)