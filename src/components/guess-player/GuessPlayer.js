import React from 'react';
import { PropTypes } from 'prop-types';
import Choices from '../common/choices/Choices';
import './GuessPlayer.css';
import { random, shuffle } from '../common/utils';


class GuessPlayer extends React.Component {
  constructor(props) {
    super(props);
    const { firebase, mode } = props;
    const cachedPlayers = JSON.parse(localStorage.getItem('players'));

    let players = [];
    if (cachedPlayers && mode !== 'all') {
      players = cachedPlayers.filter(player => player[mode] === true);
    } else if (cachedPlayers) {
      players = cachedPlayers;
    }

    let current = players.length > 0 ? random([], 1, players.length) : null;
    let randomNumbers = current ? random([current], 3, players.length).concat(current) : null;

    this.state = {
      players,
      answered: [],
      result: 'unanswered',
      correct: 0,
      correctAnswer: cachedPlayers ? players[current] : {},
      answers: cachedPlayers ? shuffle(randomNumbers.map(n => players[n])) : []
    };

    if (!cachedPlayers) {
      firebase.database().ref('/').once('value').then((snapshot) => {
        let loadedPlayers = snapshot.val();
        if (mode !== 'all') {
          loadedPlayers = loadedPlayers.filter(player => player[mode] === true);
        }
        current = random([], 1, loadedPlayers.length);
        randomNumbers = random([current], 3, loadedPlayers.length).concat(current);

        this.setState({
          players: loadedPlayers,
          answers: loadedPlayers ? shuffle(randomNumbers.map(n => loadedPlayers[n])) : [],
          correctAnswer: loadedPlayers[current]
        });
        localStorage.setItem('players', JSON.stringify(snapshot.val()));
      });
    }
  }

  getNextPlayer = () => {
    const { answered, players } = this.state;
    const current = random(answered, 1, players.length);
    const randomNumbers = random([current], 3, players.length).concat(current);

    this.setState({
      correctAnswer: players[current],
      answers: shuffle(randomNumbers.map(n => players[n])),
      result: 'unanswered'
    });
  }

  onSelectAnswer = (id) => {
    const { correctAnswer: { player_id }, answered, correct, result } = this.state;

    if (result !== 'unanswered') { return; }

    if (id === player_id) {
      this.setState({
        result: 'correct',
        answered: [...answered, player_id],
        correct: correct + 1
      }, () => {
        window.setTimeout(this.getNextPlayer, 1000);
      });
    } else {
      this.setState({
        result: 'incorrect',
        answered: [...answered, player_id],
      }, () => {
        window.setTimeout(this.getNextPlayer, 1000);
      });
    }
  }

  render() {
    const { correctAnswer, answers, result, correct, answered } = this.state;
    const { player_id, player_name } = correctAnswer;
    return (
      <div className="guess-player">
        { result !== 'unanswered' && <div className={`result ${result}`}>{result === 'correct' ? 'Correct!' : `Incorrect. This is ${correctAnswer.player_name}.`}</div>}
        { result === 'unanswered' && <div className="count">{`${correct} / ${answered.length}`}</div>}
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
  firebase: PropTypes.shape({
    database: PropTypes.func.isRequired,
  }).isRequired,
  mode: PropTypes.string.isRequired,
};

export default GuessPlayer;
