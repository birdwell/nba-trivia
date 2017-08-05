import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Mode.css';

class Mode extends Component {
  onClick = ({ target }) => {
    const { onSelect } = this.props;
    onSelect(target.getAttribute('name'));
  }

  render() {
    return (
      <div className="mode">
        <div className="all base" name="all" onClick={this.onClick} role="button" tabIndex={0}>All Players</div>
        <div className="starters base" name="starter" onClick={this.onClick} role="button" tabIndex={-1}>Starters</div>
        <div className="rookies base" name="rookie" onClick={this.onClick} role="button" tabIndex={-1}>Rookies</div>
        <div className="allstars base" name="allstar" onClick={this.onClick} role="button" tabIndex={-1}>All Stars</div>
      </div>
    );
  }
}

Mode.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Mode;
