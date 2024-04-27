import React from 'react';
import { Link, useParams } from 'react-router-dom';
import bundles from '../../../bundles.json';
import {ShowUserData, ShowSessionData} from '../../components'

function UserPage() {
  const { id } = useParams();
  const user = bundles.find(bundle => bundle.id === parseInt(id));
  return (
    <div className="xs:w-full sm:w-3/4 md:w-3/4 lg:w-4/6 m-6">
      <Link to='/' className='mb-6'>
        ← Home Page
      </Link>
      <ShowUserData user={user}/>
      <ShowSessionData user={user}/>
    </div>
  );
}

export default UserPage;
