// Define an array to hold the regions
let regions = [];

// Define a Region constructor function
function Region(name, x, y, neighbors) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.neighbors = neighbors;
  this.controlledBy = null;
}

// Add regions to the regions array
// Each region should have a unique name, x and y coordinates, and an array of neighboring regions
regions.push(new Region("Region 1", 100, 100, ["Region 2", "Region 3"]));
regions.push(new Region("Region 2", 200, 200, ["Region 1", "Region 3"]));
regions.push(new Region("Region 3", 300, 300, ["Region 1", "Region 2"]));
