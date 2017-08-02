var phrase = "slimy smelly solution"

var object = {
    
}


function letterFreq(phrase) {
    for (var i = 0; i < phrase.length; i++) {
        object[phrase[i]] = (object[phrase[i]]+1) || 1 
    }
}

letterFreq(phrase)
console.log(object)

for (var prop in object) {
    console.log(prop + ": " + object[prop]);
}


