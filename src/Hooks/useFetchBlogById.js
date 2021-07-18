import { useState , useEffect } from "react";
import firebase from 'firebase';

const useFetchBlogById = (id) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect( () => {

        async function fetchBlogById(){
            var db = firebase.firestore();
            const collection = db.collection("blogs");
            const blog = (await collection.doc(id).get()).data();
                
            setData(blog);
            setIsPending(false);    
        }
        
        fetchBlogById();
        
      },[id]);

      return {data , isPending}

}

export default useFetchBlogById;
