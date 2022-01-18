import Post from './components/Post';
import { useState, useEffect } from 'react';
import { InterfacePost } from './interfaces'



function App() {

  // console.log(InterfacePost)

  useEffect(() => {
      async function fetchPostJSON() {
        const response = await fetch('http://localhost:4000/');
        const posts = await response.json();

        setState(posts)
  }

    fetchPostJSON()
  }, [])

  const [state, setState] = useState<InterfacePost[]>()
  console.log('state', state)

  return (
    <div >
      {state && state.map((post: InterfacePost) =>  {
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
