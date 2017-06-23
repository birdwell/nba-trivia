import React from 'react';
import { PropTypes } from 'prop-types';
import Choice from './Choice';
import './Choices.css';

const Choices = ({ onClick, choices }) => (
  <div className="choices">
    {choices.map(choice => <Choice value={choice.player_name} onClick={onClick} id={choice.player_id} key={choice.player_id} />)}
  </div>
);

Choices.propTypes = {
  onClick: PropTypes.func.isRequired,
  choices: PropTypes.arrayOf(PropTypes.shape({
    player_name: PropTypes.string,
    player_id: PropTypes.number,
  })).isRequired,
};

export default Choices;
