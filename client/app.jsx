import React from 'react';

// define and export our Layout component
export const MeteorData = React.createClass({
	mixins: [ReactMeteorData],

	displayName: "MeteorData",
	
	// Loads items from the Tasks collection and puts them on this.data.tasks
	getMeteorData() {

	  return {
	    count: Session.get('count') || 0,
	  };
	},
	render() {
	  return this.data ? this.props.render(this.data) : false
	}
});

export const App = React.createClass({
	handleClick(){
		Session.set('count', ++this.props.data.count);
	},

	render() {
		return (
			<p onClick={this.handleClick} >{this.props.data.count}</p>
		)
	}
});

export const OtherApp = React.createClass({
	handleClick(){
		Session.set('count', ++this.props.data.count);
	},

	render() {
		return (
			<p onClick={this.handleClick} >This is another route</p>
		)
	}
});