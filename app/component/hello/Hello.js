import React from 'react';
import './Hello.scss';

import logo from './gfx/logo.png';

class Hello extends React.Component {
  render() {
    return (
      <div id="Hello" className="container">
        <h2>{loginButton}</h2>
        <img src={logo} />
        <p>Guangzhou, China <br/> chenbin92</p>
      </div>
    );
  }
}

export default Hello;
