import React from 'react';

function ShowSessionData({ user }) {

return (
  <>
    <h2>Sessions</h2>
    {user.sessions.map((session, index) => (
      <div key={index}>
        <h3>{index+1} {session.type}</h3>
        <div>{session.date !== null ? new Date(session.date).toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date'}</div>
        <div>{session.status.title}</div>
      </div>
    ))}
  </>
)}


export default ShowSessionData;
