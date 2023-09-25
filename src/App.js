import AllHomePage from './AllHome/AllHomePage';
import React, { Component } from 'react';
import Change from './Change';
import './App.css';




// function App() {
//   return (
//     <div>
//       <AllHomePage/>
//       <Change name="Mahmoud" color="red"/>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
      person:[
        {firstName:"Ahmed",color:"black"},
        {firstName:"Mahmoud",color:"red"},
        {firstName:"Sayed",color:"blue"},
      ]
    } 
    ChangeName= ()=>{
      this.setState(
        {
          person:[
            {firstName:"Ahmed",color:"black"},
            {firstName:"Mahmoud",color:"yellow"},
            {firstName:"Sayed",color:"blue"},
          ]
        } 
      )
    }

    ResetName= ()=>{
      this.setState(
        {
          person:[
            {firstName:"Ahmed",color:"black"},
            {firstName:"Mahmoud",color:"red"},
            {firstName:"Sayed",color:"blue"},
          ]
        } 
      )
    }

  render() { 
    return (
      <div>
        <AllHomePage/>
        <Change name={this.state.person[1].firstName} color={this.state.person[1].color}/>
        {/* button change */}
        <button className="btn btn-danger mb-5 ml-5 mt-3" onClick={this.ChangeName}>Change</button>
        {/* button reset */}
        <button className="btn btn-success mb-5 ml-5 mt-3" onClick={this.ResetName}>reset</button>
      </div>
    );
  }
}

export default App;