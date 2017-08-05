import React from 'react';
import PropTypes from 'prop-types';

import './Info.css';

const Info = ({ reset, mode }) => {
  return (
    <div className="mode-info">
      <div className="current-mode">{`Current Mode: ${mode}`}</div>
      <div className="restart-mode" onClick={reset} role="button" tabIndex={0}>Change Modes</div>
    </div>
  );
};

Info.propTypes = {
  reset: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Info;
