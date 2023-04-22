class Player {
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

  moveArmy(army, region) {
    if (this.armies.includes(army) && army.moveToRegion(region)) {
      // If the army belongs to the player and was successfully moved to the region,
      // remove the army from its current region and add it to the new region.
      army.region.removeArmy(army);
      region.addArmy(army);

      // Update the player's list of controlled regions.
      this.removeControlledRegion(army.region);
      this.addControlledRegion(region);
      return true;
    }
    return false;
  }
}
