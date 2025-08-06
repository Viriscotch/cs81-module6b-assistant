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