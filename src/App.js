import React, { Component } from 'react';
import Widget from './Widget'
import AddEntry from './AddEntry'

class App extends Component {

  state = {
    info : [
      {name:"Mohammed", age:19, gender:"Male", id:1},
      {name:"Matt", age:20, gender:"Male", id:2},
      {name:"Jake", age:17, gender:"Male", id:3}
    ]
  }


  addNewEntry = (entry) => {
    entry.id = Math.random() * Math.random();
    let stateCopy = [...this.state.info, entry];
    this.setState({
      info: stateCopy
    })
  }

  deleteEntry = (id) => {
    let entryDeleted = this.state.info.filter(deleteTheEntry => {
      return deleteTheEntry.id !== id;
    })
    this.setState({
      info: entryDeleted
    })
  }
  render() {
    return (
      <div className="myApp">
        <h1>List of People Over 18</h1>
        <Widget theList={ this.state.info } deleteEntry={this.deleteEntry}/>
        <AddEntry addNewEntry={this.addNewEntry}/>
      </div>
    );
  }
}

export default App;