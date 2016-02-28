import React from 'react';
import {Button, Input, ButtonInput} from 'react-bootstrap';
import {Units} from '../../lib/Collections/collections.js';
import ReactRenderVisualizer from "react-render-visualizer";

const StaticField = React.createClass({
	propTypes: {
		content: React.PropTypes.string.isRequired
	},
	editContent(){
		Session.set('isEditing', true);
	},
	render() {
		return (
			<div>
				<p>{this.props.content}</p>
				<Button onClick={this.editContent} bsStyle="primary">Edit</Button>
			</div>
		)	
	}
});

const EditField = React.createClass({
	mixins: [ReactRenderVisualizer],
	getInitialState(){
		return {
			editText: this.props.content
		}
	},
	handleSubmit(e){
		e.preventDefault();

		Units.update(this.props._id, {
			$set: {
				content: this.state.editText
			}
		}, function(){
			Session.set('isEditing', false);
		});
	},
	handleChange(e){
		this.setState({
			editText: e.target.value
		});
	},
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<Input onChange={this.handleChange} type="textarea" label="Text Area" placeholder="Place Markdown Here" value={this.state.editText} />
				<ButtonInput type="submit" value="Submit Button" />
			</form>
		)
	}
});

export const ContentDiv = React.createClass({
	getContent(){
		if (this.props.content) {
			return this.editCheck();
		}
		else {
			return <p>Loading...</p>
		}
	},
	editCheck(){
		if (!this.props.isEditing) {
			return <StaticField {...this.props.content} />
		}
		else {
			return <EditField {...this.props.content} />
		}
	},
	render(){
		return (
			<div className="contentWrapper">
				{this.getContent()}
			</div>
		)
	}
})