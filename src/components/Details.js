import React from 'react';
import './Details.css'

export default ({ user }) => {
  const userDetails = <div>
    <div className="UserName">Name: {user ? user.profile.username : null}</div>
    <div className="UserName">FirstName: {user ? user.profile.firstName : null}</div>
    <div className="UserName">LastName: {user ? user.profile.lastName : null}</div>
    <div className="UserName">Email: {user ? user.profile.email : null}</div>
    <div className="UserId">Id: {user ? user.id : null}</div>
    <img className="UserAvatar" src={user? user.avatar : null} />
    <div className="UserName">JobTitle: {user ? user.jobTitle : null}</div>
    <div className="UserName">Bio: {user ? user.Bio : null}</div>
  </div>
  return <div className="UserDetails">
    <h1>User Details</h1>
    {user ? userDetails : null}
  </div>
}
