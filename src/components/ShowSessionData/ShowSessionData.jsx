import React, { useState } from 'react';

function ShowSessionData({ user }) {
  const statuses = ['Unbooked', 'Booked', 'Completed', 'Forfeited', 'Void'];
  const [currentId, setCurrentId] = useState(null)
  const [sessionDate, setSessionDate] = useState(null);
  const [sessionStatus, setSessionStatus] = useState(null);
  const [showInput, setShowInput] = useState(false);

 const showInputSessionEdit = (e) => {
   setCurrentId(e)
   setShowInput(true);
  }
  const handleSessionDateEdit = (e) => setSessionDate(e.target.value);
  const handleSessionStatusEdit = (e) => setSessionStatus(e.target.value);

  //delete element
  const [deletedSessions, setDeletedSessions] = useState([])
  const handleDeleteSession = (id) => {
    setDeletedSessions([...deletedSessions, id])
  }

return (
  <>
    <h2>Sessions</h2>
    <div className='flex justify-between flex-wrap'>
    {user.sessions.map((session, index) => (
      !deletedSessions.includes(session.id) && (
      <div key={index} className='mb-4 border p-4 rounded flex flex-col min-w-48'>
        <div className='flex items-center justify-between'>
        <h3>{index+1} {session.type}</h3>
        {session.date == null && <button onClick={() => handleDeleteSession(session.id)}>delete</button> }
        </div>
        <div className='flex justify-between py-2 border-b-2'>
          {showInput && session.id === currentId
          ? <input type="date" className='border' value={session.date} onChange={handleSessionDateEdit} />
          : !showInput && session.id === currentId && sessionDate 
            ? sessionDate : session.date !== null ? new Date(session.date).toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric' }) 
            : 'No date'
        }
        </div>

        <div className='flex justify-between py-2'>
          {showInput && session.id === currentId 
          ? <select value={sessionStatus || session.status.title} onChange={handleSessionStatusEdit}>
            {statuses.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
              )
            )}
            </select>
          : !showInput && session.id === currentId && sessionStatus 
            ? sessionStatus 
            : session.status.title
          }
        </div>

        <button onClick={!showInput ? () => showInputSessionEdit(session.id) : () => setShowInput(false)} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 me-2 my-2">{!showInput ? 'Edit session' : 'Save session'}</button>
      </div>
    )))}
        </div>

  </>
)}


export default ShowSessionData;
