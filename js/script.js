const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

// create new variable & assign it an empty object
const learning = {};

// create a property of learning object with a value of "JS"
learning.topic = "JS";

// create another object property & assign it an array that contains four learning goals as elements
learning.learningGoals = [
    "Understand programming fundamentals",
    "Learn something new",
    "Have Fun",
    "Build JS programs"
  ];

  // create an object property called category with a value
  learning.category = "Front End Development";

  // create another object property called topicImportance & give it a value of "High"
  learning.topicImportance = "High";

  console.log(learning);

