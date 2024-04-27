import React from 'react';
import { useParams } from 'react-router-dom';
import bundles from '../../../bundles.json';
import {ShowUserData, ShowSessionData} from '../../components'

function UserPage() {
  const { id } = useParams();
  const user = bundles.find(bundle => bundle.id === parseInt(id));
  return (
    <>
      <ShowUserData user={user}/>
      <ShowSessionData user={user}/>
    </>
  );
}

export default UserPage;
