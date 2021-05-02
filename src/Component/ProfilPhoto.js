import profilePicture from './profilePicture.jpg';

import React from "react";
const MyProfilePicture=()=>{
    return(
    <div className="picture">
      <header className="App-header">
        <img src={profilePicture} className="picture" alt="profilePicture" />
        
      </header>
    </div>
      )
 
          
}
export default MyProfilePicture;