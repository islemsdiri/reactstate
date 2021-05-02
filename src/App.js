
import './App.css';
import React from 'react';
import MyName from './Component/FullName'
import MyProfilePicture from './Component/ProfilPhoto'
class App extends React.Component {
  constructor(){
    super()
    this.state={okey:false}
  }
  toggle=()=>this.setState({okey:!this.state.okey})
 

render(){
  return (
    <div className="App">
     <h1>WorkShop State</h1>
     <button className='visibility-btn' onClick={this.toggle}> {this.state.okey ? 'hide' :'SHOW' }</button>
     {this.state.okey ? 
                        <> <MyProfilePicture/>
                            <MyName/>  </>         :null }
    </div>
  );
}
}

export default App;
