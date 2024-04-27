import React, { useState } from 'react';

function ShowUserData({ user }) {
  //edit bundle deadline
  const [bundleDeadline, setBundleDeadline] = useState(new Date(user.deadline).toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric' }));
  const [showBundleDeadlineInput, setShowBundleDeadlineInput] = useState(false);

  const handleBundleDeadlineEdit = (e) => setBundleDeadline(e.target.value);  

  const saveBundleDeadline = () => {
    setShowBundleDeadlineInput(false);
    setBundleDeadline(bundleDeadline);
  }
  
return (
  <>
  <div className='mb-6'>
    <h1>{user.user.first_name} {user.user.last_name}</h1>
    <div>{user.user.is_active ? 'Active' : 'Inactive'}</div>
    <div><a href={`mailto:${user.user.email}`}>{user.user.email}</a></div>
  </div>

<div className='rounded border p-4'>
    <div className='flex justify-between py-2 border-b-2'>
      <div>Bundle deadline</div>
      <div>
        {showBundleDeadlineInput 
          ? <input type="date" className='border' value={bundleDeadline} onChange={handleBundleDeadlineEdit} />
          : `${bundleDeadline}`}
      </div>
      <div><button className='text-blue-600 dark:text-blue-500 underline' onClick={!showBundleDeadlineInput ? ()=>setShowBundleDeadlineInput(true) : saveBundleDeadline}>{!showBundleDeadlineInput ? 'edit' : 'save'}</button></div>
    </div>
    <div className='flex justify-between py-2 border-b-2'>
      <div>Bundle duration</div>
      <div>{user.duration_mins}</div>
    </div>
    <div className='flex justify-between py-2'>
      <div>Bundle coach</div>
      <div>{`${user.coach.first_name} ${user.coach.last_name}`}</div>
    </div>
</div>

  </>
)
}

export default ShowUserData;
