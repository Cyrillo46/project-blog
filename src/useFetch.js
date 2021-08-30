import { useState, useEffect } from "react";
// this will retrieve the data we need
const useFetch = (url) => {
  // set the default states
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // everytime the url changes, this will run
  useEffect(() => {
    // our cleanup function
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not retrieve the data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        }
        setIsPending(false);
        setError(err.message);
      });

    return () => abortCont.abort();
  }, [url]); // url is our dependency here

  return { data, isPending, error }; // return our updated states
};

export default useFetch;
