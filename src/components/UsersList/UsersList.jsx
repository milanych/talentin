import bundles from '../../../bundles.json'

function UsersList() {
  return (
    <>
      {bundles.map(bundle => (
          <h2>{bundle.user.first_name} {bundle.user.last_name}</h2>
      ))}
    </>

  )
}

export default UsersList
