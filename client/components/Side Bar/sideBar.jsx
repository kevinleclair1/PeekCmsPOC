import {Nav, NavItem} from 'react-bootstrap';
import React from 'react';

export const SideBar = React.createClass({
	getNavItems(){
		let navArr = this.props.units.map(function(unit){
			return <NavItem eventKey={unit.label}>{unit.label}</NavItem>
		});
		return (
			<Nav bsStyle='pills' stacked activeKey={this.getActiveKey()} onSelect={this.handleSelect}>
				{navArr}
			</Nav>
		)
	},
	handleSelect(selectedKey){
		FlowRouter.go(`/unitOverview/${selectedKey}`);
	},
	getActiveKey(){
		let unit = this.props.selectedUnit;
		return  unit ? unit.label : this.props.units[0].label;	
	},
	render(){
		let content = this.props.units.length ? this.getNavItems() : <p>Loading...</p>
		return (
			<div>
				{content}
			</div>
		);
	}
});