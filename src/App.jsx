import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayouts from './layouts/DefaultLayouts';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import './App.css';
import MovieContext from './contexts/MovieContext';
import ReviewForm from './components/ReviewForm';

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: "2010",
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    genre: "Crime",
    release_year: "1972",
    abstract: "ul Italian-American crime family and their struggles.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Titanic",
    director: "James Cameron",
    genre: "Romance",
    release_year: "1997",
    abstract:
      "A romantic story set against the tragic sinking of the RMS Titanic.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "The Matrix",
    director: "The Wachowskis",
    genre: "Action",
    release_year: "1999",
    abstract:
      "A hacker discovers the truth about his reality and his role in the war against its controllers.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: "2014",
    abstract:
      "A team of explorers travels through a wormhole in space to save humanity.",
    image: "https://picsum.photos/200/300",
  },
];


function App() {

  return (
    <>
      <MovieContext.Provider value={{ initialMovies }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/movies/:id' element={<MoviePage />}></Route>
              <Route path='/movies/:id/review' element={<ReviewForm/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  );
}

export default App;
