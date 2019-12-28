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
        if (item !== null){
            // push those values into correspding input boxes
            $('.' + time + ' > input').val(item)
        }
        if (hour === 12) {
            hour = 0;
        };
    }

console.log(moment().format())




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