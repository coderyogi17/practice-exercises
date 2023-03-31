// Your code here
// class PartyPlanner{
// 	constructor(guestList){
// 		guestList=[];
// 	}
// 	addToGuestList(name){
// 		guestlist.push(name);
// 	}
// 	throwParty(){
// 		if(guestList.length===0){
// 			return ("Gotta add people to the guest list");
// 		} else if(guestList.length>0){
			
// 			return "Welcome to the party " + this.guestList.join(" and ");
// 		}
// 	}
// }
function partyPlanner() {
	return {
	  guestList: [],
	  throwParty: function () {
		if (this.guestList.length > 0) {
		  return "Welcome to the party " + this.guestList.join(" and ");
		} else {
		  return "gotta add people to the guest list";
		}
	  },
	  addToGuestList: function (name) {
		this.guestList.push(name);
	  },
	};
  }
  



/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}