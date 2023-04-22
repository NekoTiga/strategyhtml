// Define the Army object constructor
function Army(name, color, region, size) {
  this.name = name;
  this.color = color;
  this.region = region;
  this.size = size;
}

// Define the armies array
var armies = [];

// Define a function to create a new army
function createArmy() {
  // Get the values from the input fields
  var name = document.getElementById("armyName").value;
  var color = document.getElementById("armyColor").value;
  var size = document.getElementById("armySize").value;
  var regionId = document.getElementById("armyRegion").value;

  // Get the region object from the regions array
  var region = regions.find(function (region) {
    return region.id == regionId;
  });

  // Create a new army object and add it to the armies array
  var army = new Army(name, color, region, size);
  armies.push(army);

  // Update the region's control to the army's color
  region.control = color;

  // Update the army list in the HTML
  updateArmyList();
}

// Define a function to update the army list in the HTML
function updateArmyList() {
  // Get the army list element
  var armyList = document.getElementById("armyList");

  // Clear the army list
  armyList.innerHTML = "";

  // Loop through the armies array and create a list item for each army
  armies.forEach(function (army) {
    var listItem = document.createElement("li");
    listItem.innerHTML = army.name + " (" + army.size + ") - " + army.region.name;
    listItem.style.color = army.color;
    armyList.appendChild(listItem);
  });
}
