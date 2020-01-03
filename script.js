$(document).ready(function () {
    // get any values from local storage
    // search localstorage for all applicable values 9am - 5pm
    // use a loop
    for (let hour = 9; hour < 18; hour++) {
        var item = localStorage.getItem(hour)
        if (item !== null) {
            // push those values into correspding input boxes
            $('input.' + hour).val(item);
        }
    }


    // determine current time (sanity checku)
    console.log(moment().format('H'));
    // got the current hour in military time
    // link to moment
    var currentHour = moment().format('H');
    // as long as current is greater than the other ours
    // starting at 9 then 
    for (let hour = 9; hour < currentHour; hour++) {
        // grab a list element that matches the hour
        // add a class of redBg
        $("li." + hour).addClass("redBg")
    }

    // for (let hour = 18; hour < ) {
    // $("li.list-group-item").addClass("redBg")
    // }
    // $("li.list-group-item").css("background-color", "yellow");
    // }
    // what time ids are paster current timer
    // anything under the current hour
    // for loop? under current hour
    // change color of old ones 
    // --- either
    // create a class in you css that reps the color you want
    // use jquery to add a class to that element
    // -------or---------
    // directly manipulate and elmentes styles jqure



    // hour = hour + 1;
    // hour += 1;
    // ++hour;

    // hour++;
    // for (let hour = 0900; hour < 0800 || hour > 1800; hour++) {
    // };
    // var time = hour
    // item = localStorage.getItem(time)
    // if (item !== null) {
    //     $('.' + time + '> input').val(item)
    // }
    // if (hour === 1200){
    //     hour = 0;
    // };




    // link moment().format result to css styling
    // 1. get result from moment.format
    // 2. link time >current time to css coloring
    // 3. set css coloring for card
    // 4. set css coloring to grey if time is <current time

    // console.log(moment().format());

    // var currentTime = moment().format();
    // var pastTime = moment().format() -1;
    // if (9 <= currentTime && currentTime < 20) {
    //     if (document.body) {
    //         document.body.background = 
    //     }
    // }
    // else {
    //     if (document.body) {
    //         document.body.background = ;
    //     }
    // }



    // on click
    $('.save').on('click', function () {

        // grab the text from the input box
        // console.log(this.id);
        var currentButtonId = this.id;
        var text = $('input.' + currentButtonId).val();
        // console.log(inputBox.val())
        // push it to local storage
        localStorage.setItem(currentButtonId, text);

        // $('.' + currentButtonId).addClass('redBg');
    })

});