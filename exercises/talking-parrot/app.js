// We have a loud talking parrot. Write a function where the 'hour' parameter is the current hour in the range 0..23, and the 'talking' parameter is a boolean indicating if the parrot is currently talking. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

function trouble(hour, talking) {
    if (hour < 0 || hour > 23) {
        console.log("Please enter a time between 0 and 23");
    }
    if ((hour < 7 || hour > 20) && talking === true) {
        console.log("YOU ARE IN TROUBLE!!!!");
    } else {
        console.log("You are not in trouble");
    }
}

trouble(6, true)