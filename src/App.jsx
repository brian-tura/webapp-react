import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayouts from './layouts/DefaultLayouts';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/movies/:id' element={<MoviePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
