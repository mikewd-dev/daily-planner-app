var d= new Date()
var currentDay = $("#currentDay").text(dayjs(d));


var diaryTimes = $("#diarytime");
var diaryEntries = $("#diaryentries");
var diarySave = $("#diarysave");

var times= ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"];

var events=["New Event", "New Event", "New Event", "New Event", "New Event", "New Event", "New Event", "New Event", "New Event"];

var save =["💾", "💾", "💾", "💾", "💾", "💾", "💾", "💾", "💾"]


// var calender =$(".container")

//loop through to create time blocks


for(var i=0; i<times.length; i++){
var row = $('<div class=row>')
var timeBlock =$('<div>')
timeBlock.addClass("col-2 time-block hour")
timeBlock.attr('data-time', times[i]);
timeBlock.text(times[i]);
var diaryBlock = $('<div>');
diaryBlock.addClass("col-8 past row");
var diaryArea =$('<textarea>');
diaryArea.addClass("description");
diaryArea.text(events[i])
var saveBlock = $('<div>');
saveBlock.addClass("col-2 saveBtn saveBtn i:hover");
saveBlock.text(save[i])
row.append(timeBlock, diaryBlock.append(diaryArea), saveBlock);
diaryTimes.append(row);
diaryEntries.append(row);
diarySave.append(row);
}
