import React, { useState } from 'react'

function EditBundleCoach({user, bundles}) {
  const [coach, setCoach] = useState(`${user.coach.first_name} ${user.coach.last_name}`);
  const [showCoachInput, setShowCoachInput] = useState(false);
  const handleCoachEdit = (e) => setCoach(e.target.value);

  //unique coach values
  const uniqueCoachNames = [...new Set(bundles.map(e => `${e.coach.first_name} ${e.coach.last_name}`))];

  return (
    <div className='flex justify-between py-2'>
      <div>Bundle coach</div>
      {showCoachInput ? 
      <select value={coach} onChange={handleCoachEdit}>
      {uniqueCoachNames.map((coach, index) => (
        <option key={index} value={coach}>
          {coach}
        </option>
        )
      )}
      </select>
      : `${coach}`}
      <div><button className='text-blue-600 dark:text-blue-500 underline' onClick={!showCoachInput ? ()=>setShowCoachInput(true) : ()=>setShowCoachInput(false)}>{!showCoachInput ? 'edit' : 'save'}</button></div>
    </div>
  )
}

export default EditBundleCoach
