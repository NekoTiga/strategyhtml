class AI {
  constructor(id) {
    this.id = id;
    this.armies = [];
    this.controlledRegions = [];
  }

  addControlledRegion(region) {
    if (!this.controlledRegions.includes(region)) {
      this.controlledRegions.push(region);
    }
  }

  removeControlledRegion(region) {
    const index = this.controlledRegions.indexOf(region);
    if (index !== -1) {
      this.controlledRegions.splice(index, 1);
    }
  }

  addArmy(army) {
    this.armies.push(army);
  }

  removeArmy(army) {
    const index = this.armies.indexOf(army);
    if (index !== -1) {
      this.armies.splice(index, 1);
    }
  }

  moveArmyRandomly() {
    // Choose a random army and a random neighboring region to move to.
    const army = this.armies[Math.floor(Math.random() * this.armies.length)];
    const region = army.region.neighbors[Math.floor(Math.random() * army.region.neighbors.length)];

    // Move the army to the new region.
    if (army.moveToRegion(region)) {
      // If the army was successfully moved to the region,
      // remove the army from its current region and add it to the new region.
      army.region.removeArmy(army);
      region.addArmy(army);

      // Update the AI's list of controlled regions.
      this.removeControlledRegion(army.region);
      this.addControlledRegion(region);
      return true;
    }
    return false;
  }
}
