import { useDisconnect } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'

const index = () => {
  const disconnect = useDisconnect()
  const router = useRouter()

  return <div></div>
}

export default index
