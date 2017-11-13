import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import Login from '../Login';
import Welcome from '../Welcome';
import All from '../All';
import Browse from '../Browse';
import { updateUsr } from '../../actions';

class App extends Component {
	switcher = _ => {
		switch(this.props.page) {
			case 'login': return (<Login />);
			case 'welcome': return (<Welcome />);
			case 'all': return (<All />);
			case 'browse': return (<Browse />);
			default: return (<Login />);
		}
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">HackSU</p>
        </header>
        <div className="body">
				{this.switcher()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		usr: state.data.usr,
		page: state.page.page
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
