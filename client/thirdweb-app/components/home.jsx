import React, { useState, useEffect } from 'react'

import { useStateContext } from '../context'
import DisplayGrants from './DisplayGrants';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [grants, setGrants] = useState([]);

    const { address, contract, getGrants } = useStateContext();

    const fetchGrants = async () => {
        setIsLoading(true);
        const data = await getGrants();
        setGrants(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if(contract) fetchGrants();
    }, [address, contract]);

    return (
        <DisplayGrants
        title="All Grants"
        isLoading={isLoading}
        grants={grants}
        />
    )
}

export default Home