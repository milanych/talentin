import React from 'react';
import { Link, useParams } from 'react-router-dom';
import bundles from '../../../bundles.json';
import {ShowUserData, ShowSessionData} from '../../components'

function UserPage() {
  const { id } = useParams();
  const user = bundles.find(bundle => bundle.id === parseInt(id));
  return (
    <>
      <Link to='/' className='mb-6'>
        ← Home Page
      </Link>
      <ShowUserData user={user}/>
      <ShowSessionData user={user}/>
    </>
  );
}

export default UserPage;
