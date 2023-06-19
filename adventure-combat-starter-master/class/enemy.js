const {Character} = require('./character');
const { Player } = require('./player');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description,currentRoom);
    this.cooldown = 3000;
    this.attackTarget=null;
    
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    if (this.cooldown > 0) {
      this.rest();
    } else {
      const exitsDir = this.currentRoom.getExits();
      const room = this.currentRoom.getRoomInDirection(exitsDir);
      this.currentRoom = room;
      this.cooldown = 3000;
      
    }
  }
  
  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    if(this.cooldown>0){
      this.rest();
    } else {
      if(this.attackTarget instanceof Player){
      this.attackTarget.health= this.attackTarget.health-this.strength;
       }

      
    }

  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
