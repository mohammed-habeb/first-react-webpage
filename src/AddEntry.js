import React, { Component } from 'react';


class AddEntry extends Component {
	state = {
		name: null,
		age: null,
		gender: null
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	// handleChange2 = () => {
	// 	this.setState({
	// 		name: document.getElementById('name').value,
	// 		age: document.getElementById('age').value,
	// 		gender: document.getElementById('gender').value
	// 	})
	// }

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addNewEntry(this.state);
	}


	render(){
		return(
			<div className="input-form">
				<form onSubmit={this.handleSubmit}> 
					<label htmlFor="name" >Name: </label>
					<input type="text" id="name" onChange={this.handleChange}></input>
					<label htmlFor="age">Age: </label>
					<input type="text" id="age" onChange={this.handleChange}></input>
					<label htmlFor="gender">Gender: </label>
					<input type="text" id="gender" onChange={this.handleChange}></input>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddEntry;