var room = {
    lightsOn: false,
    walls: "white",
    furniture: ["bed", "desk", "dresser"],
    clean: true,
    timeToClean: function() {
        if(clean === false) {
            console.log("Time to clean")
        }
    }
};

var windows = {
    open: false,
    numWindows: 2,
};

var closet = {
    stuff: ["clothes", "snowboard", "shoes", "guitar"]
};

var bookshelf = {
    books: [
    {
        title: "Airframe",
        author: "Michael Crichton",
        numPages: 473,
        read: true,
    },
    {
        title: "And the Mountain Echoes",
        author: "Khaled Hosseini",
        numPages: 402,
        read: true,
        },
    {
        title: "Catch 22",
        author: "Joseph Heller",
        numPages: 567,
        read: false,
    }
  ],
    numShelves: 4,
};

var person = {
  name: ['Rachel', 'Howell'],
  age: 21,
  gender: 'female',
  interests: ['music', 'skiing', "reading"],
  bio: function() {
    console.log(this.name[0] + " " + this.name[1] + " is " + this.age + " years old. She likes " + this.interests[0] + " and " + this.interests[1] + "." + "She also likes " + this.interests[2] + ".");
  },
  greeting: function() {
    console.log("Hi, I'm " + this.name[0] + ".");
  }
};

var backpack = {
    contents: ["laptop", "pens", "notebook", "food", "charger"]
};

var keys = {
    type ["house", "car"]
};

var food = {
    yummy: true,
    enough: false, 
};

var laptop = {
    type: "MacBook Pro",
    color: "Space Grey",
};

var netflix = {
    shows: [],
    stillWatching: = true,
    autoPlay: function() {
        if(stillWatching === true) {
            console.log("Resume Play")
        }
    }
}
