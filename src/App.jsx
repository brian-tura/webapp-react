import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayouts from './layouts/DefaultLayouts';
import HomePage from './pages/HomePage';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/movies/:id' element={<h1>Dettaglio film</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
