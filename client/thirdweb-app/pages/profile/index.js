import React, { useState, useEffect } from 'react'

import { useStateContext } from '../../context'
import DisplayGrants from '../../components/DisplayGrants'

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false)
  const [grants, setGrants] = useState([])

  const { address, contract, getUserGrants } = useStateContext()

  const fetchGrants = async () => {
    setIsLoading(true)
    const data = await getUserGrants()
    setGrants(data)
    setIsLoading(false)
  }

  useEffect(() => {
    if (contract) fetchGrants()
  }, [address, contract])

  return (
    <DisplayGrants title='All Grants' isLoading={isLoading} grants={grants} />
  )
}
