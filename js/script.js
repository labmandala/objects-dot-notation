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

// change value of the topic property
learning.topic = "JavaScript";

// remove second item from array
learning.learningGoals.splice(1, 1);

// log out object to check changes
console.log(learning);

/* set value of topicElement variable (using innerText property) to string 
with value of topic property using template literals and dot notation */
topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;

// remove class “hide” that’s given to the topicElement
topicElement.classList.remove("hide");

/* set the innerText of the countElement to string
with the length of the learningGoals property array */
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

// remove the class “hide” that’s given to countElement
countElement.classList.remove("hide");

