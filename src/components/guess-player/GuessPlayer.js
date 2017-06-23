import React from 'react';
import { PropTypes } from 'prop-types';
import Choices from '../common/choices/Choices';
import './GuessPlayer.css';

function random(filter = [], count = 1) {
  if (count === 1) {
    let found = false;
    let rnd = 0;
    while (!found) {
      rnd = Math.floor(Math.random() * 486);
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
        rnd = Math.floor(Math.random() * 486);
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
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class GuessPlayer extends React.Component {
  constructor(props) {
    super(props);
    const { firebase } = props;
    const cachedPlayers = JSON.parse(localStorage.getItem('players'));
    const current = random();
    const randomNumbers = random([current], 3).concat(current);

    this.state = {
      players: cachedPlayers || [],
      answered: [],
      result: 'unanswered',
      correct: 0,
      correctAnswer: cachedPlayers ? cachedPlayers[current] : {},
      answers: cachedPlayers ? shuffle(randomNumbers.map(n => cachedPlayers[n])) : []
    };
    if (!cachedPlayers) {
      firebase.database().ref('/').once('value').then((snapshot) => {
        const players = snapshot.val();
        this.setState({
          players,
          answers: players ? shuffle(randomNumbers.map(n => players[n])) : [],
          correctAnswer: players[current]
         });
        localStorage.setItem('players', JSON.stringify(players));
      });
    }
  }

  getNextPlayer = () => {
    const { answered, players } = this.state;
    const current = random(answered);
    const randomNumbers = random([current], 3).concat(current);

    this.setState({
      correctAnswer: players[current],
      answers: shuffle(randomNumbers.map(n => players[n])),
      result: 'unanswered'
    });
  }

  onSelectAnswer = (id) => {
    const { correctAnswer: { player_id }, answered, correctAnswer, correct } = this.state;
    if (id === player_id) {
      this.setState({
        result: 'correct',
        answered: [...answered, correctAnswer.player_id],
        correct: correct + 1
      }, () => {
        window.setTimeout(this.getNextPlayer, 2000)
      });
    } else {
      this.setState({
        result: 'incorrect',
        answered: [...answered, correctAnswer.player_id],
      }, () => {
        window.setTimeout(this.getNextPlayer, 2000)
      });
    }
  }

  render() {
    const { correctAnswer, answers, result, correct, answered } = this.state;
    const { player_id, player_name } = correctAnswer;
    return (
      <div className="guess-player">
        { result !== 'unanswered' && <div className={`result ${result}`}>{result === 'correct' ? 'Correct!' : `Incorrect. This is ${correctAnswer.player_name}.`}</div>}
        { result === 'unanswered' && <div className="count">{`${correct} - ${answered.length}`}</div>}
        <img
          className="player-img"
          src={`http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player_id}.png`}
          alt={player_name}
        />
        <Choices onClick={this.onSelectAnswer} choices={answers} />
      </div>
    );
  }
}

GuessPlayer.propTypes = {
};

export default GuessPlayer;
