import React from 'react';
import ReactDOM from 'react-dom';

var i = 0;
var loginFunction = function(){ alert('welcome!'); };
var loginButton = [<a key={i++} className="link" href="javscript:;" onClick={loginFunction}>Login</a>];


import Hello from './component/hello/Hello';
import Test from './component/test/Test';


var Page = React.createClass({ // pagename={this.props.pagename}
  handleEnter: function(){
    var self = this;
    this.state.variable = 'test variable';
  },
  render: function() {
    return (
      <div>
      	 <header>{loginButton}</header>
        <Hello />
        <Test />
      </div>
    );
  }
});

ReactDOM.render(
  <Page pagename="Engineering" />,
  document.getElementById('root')
);