import React, { useState } from 'react';
import {EditBundleDuration, EditBundleDeadline} from '../index';

function ShowUserData({ user }) {



return (
  <>
  <div className='mb-6'>
    <h1>{user.user.first_name} {user.user.last_name}</h1>
    <div>{user.user.is_active ? 'Active' : 'Inactive'}</div>
    <div><a href={`mailto:${user.user.email}`}>{user.user.email}</a></div>
  </div>

<div className='rounded border p-4'>
    

    <EditBundleDeadline user={user}/>
    <EditBundleDuration user={user}/>
    <div className='flex justify-between py-2'>
      <div>Bundle coach</div>
      <div>{`${user.coach.first_name} ${user.coach.last_name}`}</div>
    </div>
</div>

  </>
)
}

export default ShowUserData;
