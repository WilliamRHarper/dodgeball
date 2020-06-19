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
    constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience
    }
  }
  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
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
    for (let i = 0; i < arrOfPeople.length; i++){
      if (id === arrOfPeople[i].id){
        listOfPlayers.unshift(arrOfPeople[i]);
        arrOfPeople.splice(i, 1);
      }
    }
    const listElement = document.getElementById('people');
    while (listElement.hasChildNodes()) {  
      listElement.removeChild(listElement.firstChild);
    }
    listPeopleChoices();
    console.log(`li ${id} was clicked!`)
    const playerElement = document.getElementById('player')
    const li = document.createElement("li")
    const button1 = document.createElement("button")
    button1.innerHTML = "Red Team"
    button1.addEventListener('click', function() {makeRed(person.id)} )
    const button2 = document.createElement("button")
    button2.innerHTML = "Blue Team"
    button2.addEventListener('click', function() {makeRed(person.id)} )


  }