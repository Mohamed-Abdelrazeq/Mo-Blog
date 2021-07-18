import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {

        const abortCont = new AbortController();


        fetch(url , {signal : abortCont.signal})
        .then(result => {
          return result.json();
          }).catch(
              err => {
                console.log("Server Problem");
              }
          )
          .then(data => {
              setData(data);
              setIsPending(false);
          }).catch(err => {
              if(err === 'AbortError'){
                console.log("Fetch Abort");
              }
              console.log("Data Error");
          })

          return () => abortCont.abort();
      },[url]);

      return {data , isPending}

}

export default useFetch;
