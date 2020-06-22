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
  
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
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
    const listElement = document.getElementById('people');
    while (listElement.hasChildNodes()) {  
      listElement.removeChild(listElement.firstChild);
    }
    // listPeopleChoices();
    console.log(`li ${id} was clicked!`)
    const playerElement = document.getElementById('players')
    // listOfPlayers.map(person => {
    const li = document.createElement("li")
    const button1 = document.createElement("button")
    button1.innerHTML = "Red Team"
    button1.addEventListener('click', function() {makeRed(newPlayer.id)} )
    const button2 = document.createElement("button")
    button2.innerHTML = "Blue Team"
    button2.addEventListener('click', function() {makeBlue(newPlayer.id)} )
    li.appendChild(button1)
    li.appendChild(button2)
    li.appendChild(document.createTextNode(`Player #: ${newPlayer.id} ,  ${newPlayer.name},  ThrowBall Lvl:${newPlayer.canThrowBall} , CanDodge Lvl:${newPlayer.canDodgeBall}, IsHealthy: yes,  Years Playing:${newPlayer.yearsExperience}` ))
    playerElement.append(li)
    // })
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
  const listElement = document.getElementById('players');
  while (listElement.hasChildNodes()) {  
    listElement.removeChild(listElement.firstChild);
  }
  const playerElement = document.getElementById('players')
  listOfPlayers.map(person => {
  const li = document.createElement("li")
  const button1 = document.createElement("button")
  button1.innerHTML = "Red Team"
  button1.addEventListener('click', function() {makeRed(person.id)} )
  const button2 = document.createElement("button")
  button2.innerHTML = "Blue Team"
  button2.addEventListener('click', function() {makeBlue(person.id)} )
  li.appendChild(button1)
  li.appendChild(button2)
  li.appendChild(document.createTextNode(`Player #: ${person.id} ,  ${person.name},  ThrowBall Lvl:${person.canThrowBall} , CanDodge Lvl:${person.canDodgeBall}, IsHealthy: yes,  Years Playing:${person.yearsExperience}` ))
  playerElement.append(li)
  })
  const redPlayerElement = document.getElementById('red')
  // redTeam.map(person => {
  const listItem = document.createElement("li")
  const button = document.createElement("button")
  button.innerHTML = "Remove Player"
  button.addEventListener('click', function() {removePlayer(person.id)})
  listItem.appendChild(button)
  listItem.appendChild(document.createTextNode(`Player #: ${newRed.id} ,  ${newRed.name},  ThrowBall Lvl:${newRed.canThrowBall} , CanDodge Lvl:${newRed.canDodgeBall}, IsHealthy: yes,  Years Playing:${newRed.yearsExperience}, Mascot:${newRed.mascot}, Team Color:${newRed.teamColor}` ))
  redPlayerElement.append(listItem)
  // })
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
const listElement = document.getElementById('players');
while (listElement.hasChildNodes()) {  
  listElement.removeChild(listElement.firstChild);
}
const playerElement = document.getElementById('players')
listOfPlayers.map(person => {
const li = document.createElement("li")
const button1 = document.createElement("button")
button1.innerHTML = "Red Team"
button1.addEventListener('click', function() {makeRed(person.id)} )
const button2 = document.createElement("button")
button2.innerHTML = "Blue Team"
button2.addEventListener('click', function() {makeBlue(person.id)} )
li.appendChild(button1)
li.appendChild(button2)
li.appendChild(document.createTextNode(`Player #: ${person.id} ,  ${person.name},  ThrowBall Lvl:${person.canThrowBall} , CanDodge Lvl:${person.canDodgeBall}, IsHealthy: yes,  Years Playing:${person.yearsExperience}` ))
playerElement.append(li)
})
const bluePlayerElement = document.getElementById('blue')
// redTeam.map(person => {
const listItem = document.createElement("li")
const button = document.createElement("button")
button.innerHTML = "Remove Player"
button.addEventListener('click', function() {removePlayer(person.id)})
listItem.appendChild(button)
listItem.appendChild(document.createTextNode(`Player #: ${newBlue.id} ,  ${newBlue.name},  ThrowBall Lvl:${newBlue.canThrowBall} , CanDodge Lvl:${newBlue.canDodgeBall}, IsHealthy: yes,  Years Playing:${newBlue.yearsExperience}, Mascot:${newBlue.mascot}, Team Color:${newBlue.teamColor}` ))
bluePlayerElement.append(listItem)
// })
}