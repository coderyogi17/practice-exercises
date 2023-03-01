class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name=name;
    this.description=description;
    this.currentRoom=currentRoom;
    this.strength = 10;
    this.health = 100;
    this.items = [];

  }

  applyDamage(amount) {
    // Fill this in
    this.health=this.health - amount;
    if (this.health <= 0){
        return this.die();
    } else {
      return this.health ;
    }
  }

  die() {
    // Fill this in

   for(let item of this.items){
    
   this.currentRoom.items.push(item);
   }
   this.currentRoom = null;
   this.items =[];
   this.health =0;
   
  }

}

module.exports = {
  Character,
};
