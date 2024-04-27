import React from 'react';

function ShowUserData({ user }) {

return (
  <>
    <h1>{user.user.first_name} {user.user.last_name}</h1>
    <div>{user.user.is_active ? 'Active' : 'Inactive'}</div>
    <div><a href={`mailto:${user.user.email}`}>{user.user.email}</a></div>
    <div>{new Date(user.deadline).toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
    <div>{user.duration_mins}</div>
    <div>{`${user.coach.first_name} ${user.coach.last_name}`}</div>
  </>
)
}

export default ShowUserData;
