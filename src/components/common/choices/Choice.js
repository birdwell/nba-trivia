import React from 'react';
import { PropTypes } from 'prop-types';

const Choice = ({ value, onClick, id }) => (
  <div className="choice" onClick={() => { onClick(id); }}>
    {value}
  </div>
);

Choice.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Choice;
