// Define the game object
var game = {
  // Define the game state
  state: {
    // Define the player turn
    playerTurn: 1,
    // Define the initial number of armies each player has
    playerArmies: 5,
    aiArmies: 5,
    // Define the regions on the game board
    regions: [],
    // Define the armies on the game board
    armies: [],
  },

  // Define the initialization function
  init: function() {
    // Generate the regions on the game board
    this.state.regions = generateRegions();
    // Spawn the initial armies
    this.spawnInitialArmies();
  },

  // Define the function to spawn the initial armies
  spawnInitialArmies: function() {
    // Generate a random region for the player to spawn in
    var playerSpawnRegion = this.state.regions[Math.floor(Math.random() * this.state.regions.length)];
    // Create the player's initial army
    var playerInitialArmy = new Army(1, playerSpawnRegion);
    // Add the player's initial army to the game state
    this.state.armies.push(playerInitialArmy);
    // Set the initial region as controlled by the player
    playerSpawnRegion.controlledBy = 1;

    // Generate a random region for the AI to spawn in
    var aiSpawnRegion = this.state.regions[Math.floor(Math.random() * this.state.regions.length)];
    // Create the AI's initial army
    var aiInitialArmy = new Army(2, aiSpawnRegion);
    // Add the AI's initial army to the game state
    this.state.armies.push(aiInitialArmy);
    // Set the initial region as controlled by the AI
    aiSpawnRegion.controlledBy = 2;
  },

  // Define the function to handle moving an army
  moveArmy: function(army, targetRegion) {
    // Check if the target region is adjacent to the army's current region
    if (army.region.adjacentRegions.indexOf(targetRegion) !== -1) {
      // Move the army to the target region
      army.region = targetRegion;
      // Update the region's control to the player's control
      targetRegion.controlledBy = army.owner;
      // Update the HTML to reflect the new control of the region
      targetRegion.updateHTML();
      // End the current turn
      this.endTurn();
    } else {
      // Display an error message if the target region is not adjacent to the army's current region
      console.log("Target region is not adjacent to army's current region");
    }
  },

  // Define the function to end the current turn
  endTurn: function() {
    // Check if it is the player's turn
    if (this.state.playerTurn === 1) {
      // Increment the AI's armies
      this.state.aiArmies++;
      // Set the AI's turn
      this.state.playerTurn = 2;
      // Trigger the AI's move
      aiMove();
    } else {
      // Increment the player's armies
      this.state.playerArmies++;
      // Set the player's turn
      this.state.playerTurn = 1;
    }
  },
};

// Define the function to generate the regions on the game board
function generateRegions() {
  // Define the array of region names
  var regionNames = [
    "Northland",
    "Southland",
    "Eastland",
    "Westland",
    "Centralia",
    "Coastland",
    "Mountainia",
    "Valley
