const players = document.getElementsByClassName('nba-player-index__trending-item');
const finishedPlayers = [];
// //i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/
const nba_starters = [
  "Dennis Schroder",
  "Kent Bazemore",
  "Taurean Prince",
  "Ersan Ilyasova",
  "Dewayne Dedmon",
  "Jeremy Lin",
  "D'Angelo Russell",
  "Allen Crabbe",
  "Rondae Hollis-Jefferson",
  "Timofey Mozgov",
  "Isaiah Thomas",
  "Jaylen Brown",
  "Gordon Hayward",
  "Jae Crowder",
  "Al Horford",
  "Kemba Walker",
  "Nicolas Batum",
  "Michael Kidd-Gilchrist",
  "Marvin Williams",
  "Dwight Howard",
  "Kris Dunn",
  "Dwyane Wade",
  "Paul Zipser",
  "Nikola Mirotic",
  "Robin Lopez",
  "Kyrie Irving",
  "J.R. Smith",
  "LeBron James",
  "Kevin Love",
  "Tristan Thompson",
  "Dennis Smith Jr",
  "Seth Curry",
  "Wesley Matthews",
  "Harrison Barnes",
  "Dirk Nowitzki",
  "Jamal Murray",
  "Gary Harris",
  "Wilson Chandler",
  "Paul Millsap",
  "Nikola Jokic",
  "Reggie Jackson",
  "Avery Bradley",
  "Tobias Harris",
  "Jon Leuer",
  "Andre Drummond",
  "Stephen Curry",
  "Klay Thompson",
  "Kevin Durant",
  "Draymond Green",
  "Zaza Pachulia",
  "Chris Paul",
  "James Harden",
  "Trevor Ariza",
  "Ryan Anderson",
  "Clint Capela",
  "Darren Collison",
  "Victor Oladipo",
  "Bojan Bogdanovic",
  "Thaddeus Young",
  "Myles Turner",
  "Patrick Beverley",
  "Austin Rivers",
  "Danilo Gallinari",
  "Blake Griffin",
  "DeAndre Jordan",
  "Lonzo Ball",
  "Kentavious Caldwell-Pope",
  "Brandon Ingram",
  "Julius Randle",
  "Brook Lopez",
  "Mike Conley",
  "Ben McLemore",
  "Chandler Parsons",
  "JaMychal Green",
  "Marc Gasol",
  "Goran Dragic",
  "Josh Richardson",
  "Justise Winslow",
  "James Johnson",
  "Hassan Whiteside",
  "Jeff Teague",
  "Andrew Wiggins",
  "Jimmy Butler",
  "Gorgui Dieng",
  "Karl-Anthony Towns",
  "Malcolm Brogdon",
  "Tony Snell",
  "Khris Middleton",
  "Giannis Antetokounmpo",
  "Thon Maker",
  "Rajon Rondo",
  "Jrue Holiday",
  "Solomon Hill",
  "Anthony Davis",
  "DeMarcus Cousins",
  "Frank Ntilikina",
  "Tim Hardaway Jr",
  "Carmelo Anthony",
  "Kristaps Porzingis",
  "Willy Hernangomez",
  "Russell Westbrook",
  "Andre Roberson",
  "Paul George",
  "Patrick Patterson",
  "Steven Adams",
  "Elfrid Payton",
  "Terrence Ross",
  "Evan Fournier",
  "Aaron Gordon",
  "Nikola Vucevic",
  "Markelle Fultz",
  "J.J. Redick",
  "Robert Covington",
  "Ben Simmons",
  "Joel Embiid",
  "Eric Bledsoe",
  "Devin Booker",
  "T.J. Warren",
  "Marquese Chriss",
  "Tyson Chandler",
  "Damian Lillard",
  "C.J. McCollum",
  "Moe Harkless",
  "Al-Farouq Aminu",
  "Jusuf Nurkic",
  "Tony Parker",
  "Danny Green",
  "Kawhi Leonard",
  "LaMarcus Aldridge",
  "Pau Gasol",
  "George Hill",
  "Buddy Hield",
  "Justin Jackson",
  "Skal Labissiere",
  "Willie Cauley-Stein",
  "Kyle Lowry",
  "DeMar DeRozan",
  "C.J. Miles",
  "Serge Ibaka",
  "Jonas Valanciunas",
  "Ricky Rubio",
  "Rodney Hood",
  "Joe Ingles",
  "Derrick Favors",
  "Rudy Gobert",
  "John Wall",
  "Bradley Beal",
  "Otto Porter",
  "Markieff Morris",
  "Marcin Gortat"
];

for (let i = 0; i < players.length; i += 1) {
  const p = players[i];
  finishedPlayers.push({
    player_number: p.getElementsByClassName('nba-player-trending-item__number')[0].textContent,
    player_name: p.getElementsByTagName('a')[0].title,
    starter: nba_starters.includes(p.getElementsByTagName('a')[0].title),
    player_id: p.getElementsByTagName('a')[0].href.split('/').pop(),
    team_name: p.getElementsByClassName('nba-player-index__team-image')[0].href.split('/')[4],
    team_image: p.getElementsByClassName('nba-player-index__team-image')[0].getElementsByTagName('img')[0].src.split('/').pop()
  });
}


const starters = document.getElementsByClassName('highlight-row');
const finishedStarters = [];
for (let i = 0; i < starters.length; i += 1) {
  finishedStarters.push(starters[i].children[1].innerText.split('.')[1].trim());
}


const codes = document.getElementsByClassName('tricode');
const nbaTeamCodes = [];

for (let i = 0; i < codes.length; i += 1) {
  if (!nbaTeamCodes.includes(codes[i].innerHTML)) {
    nbaTeamCodes.push(codes[i].innerHTML);
  }
}
