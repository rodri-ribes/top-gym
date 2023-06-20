import './App.scss';
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
