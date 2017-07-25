/*book
spoon
keys
food
laptop
backpack
person
*/

var person = {
  name: ['Rachel', 'Smith'],
  age: 21,
  gender: 'female',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. She likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};


var backpack = {
    contents: ["pen", "laptop", "notebook"],
    color: "blue",
}


var book = {
    titles: [],
    author: ,
    numBooks: 
}