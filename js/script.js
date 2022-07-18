const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
// new DOM elements selected for styles
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

// learning object is now an object literal
// create new properties, make method
const learning = {
  topic: "JS",
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs",
  ],
  category: "Front End Development",
  topicImportance: "high",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  achievedStudyGoal: false,
  addStudyTime: function (hours) {
  }
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");
