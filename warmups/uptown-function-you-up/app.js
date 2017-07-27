// You will create three functions.

// The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
// The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
// The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
// Optional Challenge:

// Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
              
function printArr(array) {
  return lyrics.join(" ");
}

console.log(printArr(lyrics));

function reverseArr(array) {
  var lyrRev = lyrics.reverse();
  return lyrRev.join(" ");
}

console.log(reverseArr(lyrics));

function everyOther(array) {
  lyrics.reverse();
  for (var i = 1; i <= lyrics.length; i++)
    lyrics.splice(i, 1);
  return lyrics.join(" ");
}

console.log(everyOther(lyrics));

var swap = function(array, indexA, indexB) {
  var temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

var swapEveryOth = function(array) {
  for (var i = 0; i < array.length; i += 2){
    swap(array, i, i+1);
  }
  return array.join(" ");
};

console.log(swapEveryOth(lyrics));