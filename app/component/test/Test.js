import React from 'react';
import './Test.scss';

import logo from './gfx/logo.png';

class Test extends React.Component {
  render() {
    return (
      <div id="Test" className="container">
        <h2>variable</h2>
        <img src={logo} />
        <p>Guangzhou, China <br/> chenbin92</p>
      </div>
    );
  }
}

export default Test;
