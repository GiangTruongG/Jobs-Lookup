import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Please remove API key here. 
    // URL should be moved to .env file and read by process.env variable
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '3f8de1cb4amsh0ee31eb4af24f7bp176febjsnfcf058a9dff0',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
      };

    const fetchData = async () => {
        setIsLoading(true);
        
        // Good implemetation
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
            console.log(response.data.data);
        } catch (error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
