import React from 'react'
import {UsersList} from '../../components'

function HomePage() {
  return (
    <div className='flex flex-col h-full justify-center'>
      <h1>List of users</h1>
      <UsersList/>
    </div>
  ) 
}

export default HomePage
