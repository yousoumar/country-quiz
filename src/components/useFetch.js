import {useState, useEffect, useRef} from 'react';

export default function useFetch(url) {

    // stores data sent by the API
    const [countriesState, countriesSetState] = useState([]);

    // stores data sent by the API so that we have less requests
    const storageData = useRef([]);

    // to handle api call errors
    const [apiErrorState, apiErrorSetState] = useState(false);

    // what allows us to handle our loader
    const [loaderState, loaderSetState] = useState('loading');

    useEffect(() => {

        const timer = setTimeout(()=>{
            fetch(url)
            .then(response => response.json())
            .then(data =>{
                data = data.filter(item => item.name && item.capital && item.flag && item.numericCode);
                storageData.current = data.slice();
                countriesSetState(data.slice());
                loaderSetState('loaded');
                
            })
            .catch(()=>{
                apiErrorSetState(true);
                loaderSetState('loaded');
            });
        }, 1000); 

        return ()=>{
            clearTimeout(timer);
        }
        
    }, [url]);

    return {countriesState, countriesSetState, storageData : storageData.current, apiErrorState, loaderState};
}
