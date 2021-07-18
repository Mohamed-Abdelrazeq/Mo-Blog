import { useState , useEffect } from "react";
import firebase from 'firebase';

const useFetch = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {

      async function fetchAllBlogs(){
        
        var blogs = [];
        const db = firebase.firestore();
        const collection = await db.collection("blogs").get();
        
        collection.forEach(
          (blog)=>{
            var myblog = blog.data();
            myblog['id'] = blog.id;
            blogs.push(myblog);
          }
        );
        
        setData(blogs);
        setIsPending(false);
      
      }

      fetchAllBlogs();
          
      },[]);

      return {data , isPending}

}

export default useFetch;
