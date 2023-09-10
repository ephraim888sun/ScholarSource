import { useLogout } from '@thirdweb-dev/react'

const index = () => {
  const { logout, isLoading } = useLogout()

  return (
    <button onClick={() => logout()}>
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  )
}

export default index
