import './App.css';
import Post from './components/Post';

function App() {

  async function fetchMoviesJSON() {
    const response = await fetch('http://localhost:4000/');
    const movies = await response.json();
    console.log(movies)
    return movies;
  }

fetchMoviesJSON()


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
