import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Units} from '../../lib/Collections/collections.js';
import {SideBar} from './Side Bar/sideBar.jsx';
import {ContentDiv} from './contentDiv.jsx';
import ReactRenderVisualizer from "react-render-visualizer";
 
// define and export our Layout component
export const MeteorData = React.createClass({
	mixins: [ReactMeteorData],

	displayName: "MeteorData",
	
	// Loads items from the Tasks collection and puts them on this.data.tasks
	getMeteorData() {
		(this.props.routeControl || Function)();

		const units = Meteor.subscribe('units');

	    return {
	      count: Session.get('count') || 0,
	      unitList: units.ready ? Units.find().fetch() : false,
	      loading: !units.ready(),
	      selectedUnit: Session.get('selectedUnit') ? Units.findOne(Session.get('selectedUnit')._id) : false,
	      isEditing: Session.get('isEditing') || false
	    };
	},
	render() {
	  return this.data ? this.props.render(this.data) : false
	}
});

export const App = React.createClass({
	mixins: [ReactRenderVisualizer],
	getInitialState(){
		return {}
	},
	render() {
		return (
			<Row className="mainWrapper">
				<Col md={3}>
					<SideBar units={this.props.data.unitList} selectedUnit={this.props.data.selectedUnit} />
				</Col>
				<Col md={9}>
					<ContentDiv 
						isEditing={this.props.data.isEditing}
						content={this.props.data.selectedUnit}/>
				</Col>
			</Row>
		)
	}
});