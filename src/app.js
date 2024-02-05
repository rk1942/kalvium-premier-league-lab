let managerName = "Jose Mourinho";
let managerAge = 61;
let currentTeam = "Chelsea";
let trophiesWon = 26;


function createManager(managerName, managerAge, currentTeam, trophiesWon)
 {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon]
  return Manager;

}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}


var formation = [4, 3, 3];

//write your function here

function createFormation(formation){

  if(formation.length==0)
  {
  return null;
  }
  var play =
  {
    defender:formation[0],
    midfield: formation[1],
    forward: formation[2]
}
  return play;

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var data = players.filter(player => player.debut == year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(targetPosition) {
  var x= players.filter(player => player.position === targetPosition);
  return x
}


//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let Arr = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        Arr.push(players[i]);
      }
    }
  }
  return Arr;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter(player => {
   
    const count = player.awards.reduce((acc, award) => {
      if (award.name === awardName) {
        return acc + 1;
      }
      return acc;
    }, 0);
   
    return count === noOfTimes;
  });
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  return players.filter(player => 
    player.awards.length >= noOfAwards &&
    player.team === team &&
    player.age < age
  );
}
//Progression 9 - Sort players in descending order of their age
function sortByAge(players) {
  return players.slice().sort((a, b) => b.birthYear - a.birthYear);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function filterByTeamxSortByNoOfAwards(team) {
  const teamPlayers = players.filter(player => player.team === team);

  
  const sortedTeamPlayers = [];
  for (let i = 0; i < teamPlayers.length; i++) {
    sortedTeamPlayers[i] = teamPlayers[i];
  }

  
  sortedTeamPlayers.sort((a, b) => b.awards.length - a.awards.length);

  return sortedTeamPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter(player => player.country == country);
  return dataTwo.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order


function SortByNamexOlderThan(age) {
  var data = players.filter(player => player.age > age);
  return data;
}