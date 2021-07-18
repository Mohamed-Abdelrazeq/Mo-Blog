import { useState } from "react";
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('A Web Developer');
  const history = useHistory();
  

  const handleSubmit = async (e) =>{
      e.preventDefault();
      const blog = {title , body , author};
      const db = firebase.firestore();

      await db.collection("blogs").add(blog);

      history.push('/');
    }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="A Web Developer">A Web Developer</option>
          <option value="A Mobile Developer">A Mobile Developer</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;