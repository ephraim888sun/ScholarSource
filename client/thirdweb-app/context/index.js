import React, { useContext, createContext } from 'react'

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from '@thirdweb-dev/react'

import { ethers } from 'ethers'
import { daysLeft } from '../utils'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x521aAbA6c415E3Bc551cB021c5CDd29F2a267b35')
  const { mutateAsync: createGrant } = useContractWrite(contract, 'createGrant')

  const address = useAddress()
  const connect = useMetamask()

  const publishGrant = async (form) => {
    try {
      const data = await createGrant({
        args: [
          address, // owner
          form.title, // title
          form.description, // description
          form.target,
          new Date(form.deadline).getTime(), // deadline,
          form.image,
        ],
      })

      console.log('contract call success', data)
    } catch (error) {
      console.log('contract call failure', error)
    }
  }

  const getGrants = async () => {
    const grants = await contract.call('getGrants')

    const parsedGrants = grants.map((grant, i) => ({
      owner: grant.owner,
      title: grant.title,
      description: grant.description,
      target: ethers.utils.formatEther(grant.target.toString()),
      deadline: grant.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        grant.amountCollected.toString()
      ),
      image: grant.image,
      pId: i,
    }))

    return parsedGrants.filter((obj) => daysLeft(obj.deadline) > 0)
  }

  const getUserGrants = async () => {
    const allGrants = await getGrants()

    const filteredGrants = allGrants.filter((grant) => grant.owner === address)

    return filteredGrants
  }

  const sponsor = async (pId, amount) => {
    const data = await contract.call('sponsorGrant', [pId], {
      value: ethers.utils.parseEther(amount),
    })

    return data
  }

  const getSponsors = async (pId) => {
    const donations = await contract.call('getSponsors', [pId])
    const numberOfDonations = donations[0].length

    const parsedSponsors = []

    for (let i = 0; i < numberOfDonations; i++) {
      parsedSponsors.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      })
    }

    return parsedSponsors
  }

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createGrant: publishGrant,
        getGrants,
        getUserGrants,
        sponsor,
        getSponsors,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
