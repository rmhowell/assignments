var myDictionary = {};

function AddWord(word, definition) {
    myDictionary[word] = definition;
    return myDictionary;
}


var newDefinition = new AddWord("awesome", "pretty much very cool");

console.log(newDefinition);