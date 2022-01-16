import Post from './components/Post';
import { useState, useEffect } from 'react';

interface post {
  header: string;
  postText: string;
  author?: string;
  date: Date
}

function App() {

  useEffect(() => {
      async function fetchPostJSON() {
        const response = await fetch('http://localhost:4000/');
        const posts = await response.json();

        setState(posts)
  }

    fetchPostJSON()
  }, [])

  const [state, setState] = useState<post[]>()
  console.log('state', state)

  return (
    <div >
      {state && state.map((post: post) =>  {
                return <Post
                  header={post.header} 
                  postText= {post.postText}
                  author={post.author} 
                  date={post.date}
                />
              }
      )}
    </div>
  );
}

export default App;
