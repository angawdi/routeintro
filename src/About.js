import React, { Component } from 'react';

class About extends Component {
	componentDidMount(){
		document.title= 'About';
	}

	render(){
		return(
			<p>My Name: {this.props.name}</p>
		);
	}
}

export default About;