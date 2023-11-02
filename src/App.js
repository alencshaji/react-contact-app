
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Singleview from './pages/Singleview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/view/:uid' element={<Singleview></Singleview>} />
       
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
