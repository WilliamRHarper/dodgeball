const assert = require('assert');
const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.name = name;
      this.id = id;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience
    }
  }
  class blueTeammate {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
      this.name = name;
      this.id = id;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
      this.mascot = 'Chicken';
      this.teamColor = 'Blue'
    }
  }
  class redTeammate {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
      this.name = name;
      this.id = id;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
      this.mascot = 'Panther';
      this.teamColor = 'Red'
    }
  }

  const makePlayer = (id) => {
    let person = arrOfPeople.find(function(player){
        return player.id == id  
    }) 
    let index = arrOfPeople.indexOf(person)
    arrOfPeople.splice(index, 1)
    //Generate Random Skill lvls for Players and push to list of players
    const newPlayer = new player (person.id, person.name, Math.floor(Math.random()* 10 ), Math.floor(Math.random()* 10 ), 'yes', person.isHealthy, Math.floor(Math.random()* 10 ))
    listOfPlayers.push(newPlayer)
    // removes person from dom
    console.log(listOfPlayers)
}

const makeRed = (id) => {
    let person = listOfPlayers.find(function(player){
        return player.id == id  
    }) 
    let index = listOfPlayers.indexOf(person)
    listOfPlayers.splice(index, 1)
  const newRed = new redTeammate (person.id, person.name, person.canThrowBall, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience, "Panther", "Red")
  redTeam.push(newRed)
  // removes person from dom
  console.log(listOfPlayers)
}

const makeBlue = (id) => {
    let person = listOfPlayers.find(function(player){
        return player.id == id  
    }) 
    let index = listOfPlayers.indexOf(person)
    listOfPlayers.splice(index, 1)
  const newBlue = new blueTeammate (person.id, person.name, person.canThrowBall, person.canDodgeBall, person.hasPaid, person.isHealthy, person.yearsExperience, 'Chicken', "Blue")
  blueTeam.push(newBlue)
  // removes person from dom
  console.log(listOfPlayers)
}
if (typeof describe === 'function'){
    describe('player', function(){
      it('it should make a person a player', function(){
        // this creates a CrewMember and passes the following arguments into its constructor:
        // 'Rick Martinez', 'pilot', 'chemistry'
        const player1 = new player(2, 'Joey Buck', 'lvl 1', 'lvl 3', 'yes', 'yes', 10);
        assert.equal(player1.name, 'Joey Buck');
        assert.equal(player1.canThrowBall, 'lvl 1');
        assert.equal(player1.yearsExperience, 10);
      });
    });
  
    describe('redTeammate', function(){
      it('can make a player a redTeammate', function(){
        const redPlayer = new redTeammate(2, 'Joey Buck', 'lvl 1', 'lvl 3', 'yes', 'yes', 10, 'Panther', 'Red')
        assert.equal(redPlayer.mascot, 'Panther');
        assert.equal(redPlayer.teamColor, 'Red');
      });
    });

    describe('blueTeammate', function(){
        it('can make a player a blueTeammate', function(){
          const bluePlayer = new blueTeammate(2, 'Joey Buck', 'lvl 1', 'lvl 3', 'yes', 'yes', 10, 'Chicken', 'Blue')
          assert.equal(bluePlayer.mascot, 'Chicken');
          assert.equal(bluePlayer.teamColor, 'Blue');
        });
      });
  }