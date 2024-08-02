import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState } from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Mahsulot from './components/Mahsulot ichi';
import Korzinka from './components/Korzinka';
import Login from './components/Login';
import Sign from './components/Sign in';
import Card from './components/Card/Index'

const App = () => {
  const [card, setCard] = useState([]);


  function addToCard(item){
    setCard([...card,item])
  }

  return (
    <>
      <Header length={card.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<Card addToCard={addToCard} />} />
        <Route path='/mahsulot' element={<Mahsulot />} />
        <Route path='/korzinka' element={<Korzinka card={card}  />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Sign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

