// Constructor for a personal assistant
function PersonalAssistant(name) {
  this.name = name;           // Assistant’s name
  this.tasks = [];            // List of pending tasks
  this.mood = "neutral";      // Initial mood
}

PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(this.name + " added task:", task);
};

PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    const completed = this.tasks.shift();
    console.log("Completing task:", completed);
    this.mood = "accomplished";
  } else {
    console.log("No tasks left to complete.");
  }
};

PersonalAssistant.prototype.reportMood = function() {
  console.log("Mood:", this.mood);
};

// Simulate a day in my life
// Create an instance of PersonalAssistant
let myAI = new PersonalAssistant("Jess");

console.log("Hi! I'm " + myAI.name + ", your assistant.");

myAI.reportMood(); // Should be neutral

myAI.addTask("Finish CS81 reflection");
myAI.addTask("Walk the dog");
myAI.addTask("Laundry");

myAI.completeTask(); // Completes "Finish CS81 reflection"
myAI.reportMood();

myAI.completeTask(); // Completes "Walk the dog"
myAI.reportMood();