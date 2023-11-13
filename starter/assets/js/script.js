var todayDate = dayjs();

//display the current date
var currentDay = $("#currentDay").text(todayDate.format('DD/MM/YYYY'));
var currentTime =todayDate.format("HH")




var diaryTimes = $("#diarytime");
var diaryEntries = $("#diaryentries");
var diarySave = $("#diarysave");

var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

var save = ["💾", "💾", "💾", "💾", "💾", "💾", "💾", "💾", "💾"];

// Create time blocks, text areas, and save buttons
for (var i = 0; i < times.length; i++) {
    var row = $('<div class=row>');
    var timeBlock = $('<div>');
    timeBlock.addClass("col-2 time-block hour");
    timeBlock.attr('data-time', times[i]);
    timeBlock.text(times[i]);

    var diaryBlock = $('<div>');
    diaryBlock.addClass("col-8 past row");

    var diaryArea = $('<textarea>');
    diaryArea.addClass("description");

    // Load data from localStorage
    var key = 'diarySaved' + i;
    var savedData = localStorage.getItem(key);

    if (savedData !== null) {
        // Update the UI with the stored data
        diaryArea.val(savedData);
    }

    var saveBlock = $('<button>');
    saveBlock.addClass("col-2 saveBtn saveBtn:hover");
    saveBlock.css('backgroundColor', '#06aed5')
    saveBlock.text(save[i]);

    // Append elements to the DOM
    row.append(timeBlock, diaryBlock.append(diaryArea), saveBlock);
    diaryTimes.append(row);
    diaryEntries.append(row);
    diarySave.append(row);

    // Save diary entries with save buttons
    (function (diaryArea, i) {
        saveBlock.on('click', function (e) {
            e.stopPropagation();
            var key = 'diarySaved' + i;
            var value = diaryArea.val();
            localStorage.setItem(key, value);
        });
    })(diaryArea, i);


}

// set color based on past present and future time
function colorTime() {
    // Iterate over time blocks and apply background color
    $(".time-block").each(function () {
      var blockTimes = parseInt($(this).attr("data-time").replace("am", ""));
      var currentTimeInt = parseInt(currentTime);

      if (currentTimeInt < blockTimes) {
        // Set background color for future time blocks
        $(this).siblings(".row").children(".description").css("backgroundColor", '#77dd77');
      } else if (currentTimeInt === blockTimes) {
        // Set background color for current time block
        $(this).siblings(".row").children(".description").css("backgroundColor", '#ff6961');
      } else {
        // Set background color for past time blocks
        $(this).siblings(".row").children(".description").css("backgroundColor", '#d3d3d3');
      }
    });
  }

  colorTime();