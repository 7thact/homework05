$(document).ready(function () {
    // get any values from local storage
    // search localstorage for all applicable values 9am - 5pm
    // use a loop
    var suffix = 'am';
    for (let hour = 9; hour < 6 || hour > 7; hour++) {
        if (hour === 12) {
            suffix = "pm"
        };
        var time = hour + suffix
        item = localStorage.getItem(time)
        if (item !== null) {
            // push those values into correspding input boxes
            $('.' + time + ' > input').val(item)
        }
        if (hour === 12) {
            hour = 0;
        };
    }

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
    
    console.log(moment().format());

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
        var text = $('.' + currentButtonId + ' > input').val();
        // console.log(inputBox.val())
        // push it to local storage
        localStorage.setItem(currentButtonId, text);
    })

});