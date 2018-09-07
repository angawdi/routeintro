import React, { Component } from 'react';

class Projects extends Component {
	componentDidMount(){
		document.title= 'Projects';
	}

	render(){

	return (
		<div>
			<h1>MY PROJECT PAGE</h1>
			<h2>Project 1</h2>
			<p>My game was about spaceship fighting</p>
			<h2>Project 2</h2>
			<p>My project two was a full stack app with Node/Express</p>
		</div>
		);
	}
}

export default Projects;