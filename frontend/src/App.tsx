import './App.css';
import Post from './components/Post';

function App() {


  return (
    <div >
      <Post 
        header={'rubrik'} 
        postText= {'post text placeholder'}
        // author={'martin lindahl'} 
        date={new Date}
      />

    </div>
  );
}

export default App;
