import { useParams } from "react-router-dom";
import useFetchBlogById from "../Hooks/useFetchBlogById";
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { useState } from "react";

const BlogDatails = () => {
    const { id } = useParams();
    const { data:blog, isPending} = useFetchBlogById(id);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const history = useHistory();

    const handleClick = async () => {
        
      setIsDeleting(true);

      const db = firebase.firestore();

      await db.collection("blogs").doc(id).delete();
      
      history.push('/');
      setIsDeleting(false);

    }
    
    return ( 
        <div className="blog-details">
          {isDeleting && <div>deleting...</div> }
          {!isDeleting && isPending && <div>Loading...</div> }
          {!isDeleting && blog && (
              <article>
                  <h2>{ blog.title }</h2>
                  <p>Written by { blog.author } </p>
                  <div> {blog.body} </div>
                  <button onClick={handleClick}>delete</button>
              </article>
          )}
        </div>
     );
}
 
export default BlogDatails;