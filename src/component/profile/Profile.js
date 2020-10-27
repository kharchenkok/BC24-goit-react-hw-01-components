import React from 'react';
import UserStats from './UserStats';
// import UserDescription from '../userStats/UserStats';


const Profile = ({items}) => {
  const{avatar,name,tag,location, stats}=items
    
    return <div className="profile">
    
  <div className="description">
    <img
      src={avatar}
      width="250"
      alt="user avatar"
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
  <ul className="stats">
   <UserStats props={stats}/>
    
  </ul>
</div>

};

export default Profile;