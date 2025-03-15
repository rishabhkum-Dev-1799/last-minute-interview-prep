// This is the Search Bar Component which will be used to search for the recipes using dummy json
//  The core topic you would be learning debouncing and caching in this component

import { useState,useEffect } from 'react';
import styles from './Typeahead.module.css';

const data_url = 'https://dummyjson.com/recipes/search?q=';

const Typeahead = () => {
  // creating the states for the components
  const [input, setInput] = useState('');
  const [results, setResults] = useState({
    data: [],
    show: false,
  });
//   Declaring the cache state
  const [resultsCache,setResultsCache]=useState({})

  const fetchData = async () => {
    if (input){
        if(resultsCache[input]){
            // returning the results from cache
            console.log('Returning the cache Results',input)
            setResults((prevValue) => ({ ...prevValue, data: resultsCache[input] }));
            return
        }
        console.log('API Called',input)
        const apiResponse = await fetch(`${data_url}${input}`).then(
            (response) => response.json()
        );
        setResults((prevValue) => ({ ...prevValue, data: apiResponse?.recipes }));
        // adding to cache
        setResultsCache((prevValue)=>({...prevValue,[input]:apiResponse?.recipes}))
    }
}

  useEffect(() => {
    //   creating the debounce function
    const timerId=setTimeout(fetchData,500);

    // returning a clear timer for cancel the timer on each use effect call
    return ()=>{
        clearTimeout(timerId)
    }
  }, [input]);

  return (
    <div className={styles.searchContainer}>
        <h1>Welcome to Recipe Search</h1>
      <input
        className={styles.searchInput}
        onChange={(event) => setInput(event.target.value)}
        onFocus={() =>
          setResults((prevValue) => ({ ...prevValue, show: true }))
        }
        onBlur={() =>
          setResults((prevValue) => ({ ...prevValue, show: false }))
        }
      />
      {results?.show && (
        <div className={styles.searchResultContainer}>
          {results.data.map((r) => (
            <p key={r?.id}>
                {r?.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Typeahead;
