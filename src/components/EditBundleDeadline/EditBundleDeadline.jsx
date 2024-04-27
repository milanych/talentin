import React, { useState } from 'react'

function EditBundleDeadline({user}) {
  
  const [bundleDeadline, setBundleDeadline] = useState(new Date(user.deadline).toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric' }));
  const [showBundleDeadlineInput, setShowBundleDeadlineInput] = useState(false);

  const handleBundleDeadlineEdit = (e) => setBundleDeadline(e.target.value);  

  const saveBundleDeadline = () => {
    setShowBundleDeadlineInput(false);
    setBundleDeadline(bundleDeadline);
  }
  return (
<div className='flex justify-between py-2 border-b-2'>
      <div>Bundle deadline</div>
      <div>
        {showBundleDeadlineInput 
          ? <input type="date" className='border' value={bundleDeadline} onChange={handleBundleDeadlineEdit} />
          : `${bundleDeadline}`}
      </div>
      <div><button className='text-blue-600 dark:text-blue-500 underline' onClick={!showBundleDeadlineInput ? ()=>setShowBundleDeadlineInput(true) : saveBundleDeadline}>{!showBundleDeadlineInput ? 'edit' : 'save'}</button></div>
    </div>
  )
}

export default EditBundleDeadline
