import React from 'react';


//const Widget = ({theList}) => {  this is line 5 and 6 in one line
const Widget = (props) => {
const {theList, deleteEntry} = props; // This is the same as        const theList = props.theList
  const infoList = theList.map( infos => {
    if(infos.age >= 18){
      return(
      <div>
        <ul className="theList" key={infos.id}>
          <li>Name: {infos.name}</li>
          <li>Age: {infos.age}</li>
          <li>Gender: {infos.gender}</li>
        </ul>
        <button onClick={ ()=> {deleteEntry(infos.id)} }>Delete</button>
        </div>
      )
    }
    else {
      return null;
    }
  })

  return(
    <div className="App">
      { infoList }
    </div>
  );
}

export default Widget;