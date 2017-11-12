import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import Login from '../Login';
import { updateUsr } from '../../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">HackSU</p>
        </header>
        <div className="body">
					<Login />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		usr: state.data.usr
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdateUsr: usr => dispatch(updateUsr(usr))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
