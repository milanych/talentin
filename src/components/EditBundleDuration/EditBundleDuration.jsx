import React, { useState } from 'react'

function EditBundleDuration({user}) {
  
  const [bundleDuration, setBundleDuration] = useState(user.duration_mins);
  const [showBundleDurationInput, setShowBundleDurationInput] = useState(false);

  const handleBundleDurationEdit = (e) => setBundleDuration(e.target.value);

  const saveBundleDuration = () => {
    setShowBundleDurationInput(false);
    setBundleDuration(bundleDuration);
  }
  return (
    <div className='flex justify-between py-2 border-b-2'>
      <div>Bundle duration</div>
      <div>
        {showBundleDurationInput 
          ? <input type="number" className='border' value={bundleDuration} onChange={handleBundleDurationEdit} />
          : `${bundleDuration} mins`}
        </div>
        <div><button className='text-blue-600 dark:text-blue-500 underline' onClick={!showBundleDurationInput ? () => setShowBundleDurationInput(true) : saveBundleDuration}>{!showBundleDurationInput ? 'edit' : 'save'}</button></div>
    </div>
  )
}

export default EditBundleDuration
