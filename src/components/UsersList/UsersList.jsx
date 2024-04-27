import bundles from '../../../bundles.json'
import { Link } from 'react-router-dom';

function UsersList() {
  return (
    <>
      {bundles.map(bundle => (
        <Link to={`${bundle.id}`} key={bundle.id}>
          <h2>{bundle.user.first_name} {bundle.user.last_name}</h2>
        </Link>
      ))}
    </>

  )
}

export default UsersList
