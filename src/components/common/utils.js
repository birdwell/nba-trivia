export const team_codes = [
  "OKC",
  "BKN",
  "MIA",
  "ORL",
  "NOP",
  "MIN",
  "SAS",
  "BOS",
  "IND",
  "MEM",
  "POR",
  "LAC",
  "PHI",
  "HOU",
  "MIL",
  "NYK",
  "TOR",
  "CHI",
  "DEN",
  "DAL",
  "CHA",
  "LAL",
  "GSW",
  "ATL",
  "WAS",
  "PHX",
  "SAC",
  "UTA",
  "DET",
  "CLE"
];

export const random = (filter = [], c = 1, max) => {
  let count = c;
  if (count === 1) {
    let found = false;
    let rnd = 0;
    while (!found) {
      rnd = Math.floor(Math.random() * max);
      if (!filter.includes(rnd)) {
        found = true;
      }
    }
    return rnd;
  } else if (count > 1) {
    const randoms = [];
    while (count !== 0) {
      let found = false;
      let rnd = 0;
      while (!found) {
        rnd = Math.floor(Math.random() * max);
        if (!filter.includes(rnd)) {
          found = true;
          filter.push(rnd);
        }
      }
      randoms.push(rnd);
      count -= 1;
    }
    return randoms;
  }
  return null;
};

export const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  const shuffleArray = array;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffleArray[currentIndex];
    shuffleArray[currentIndex] = shuffleArray[randomIndex];
    shuffleArray[randomIndex] = temporaryValue;
  }

  return shuffleArray;
};
