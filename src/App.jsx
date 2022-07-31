import { getBeers } from './Data/BeerData-API';
import CardList from './components/CardList/CardList';
import React, { useState, useEffect } from 'react';
import styles from './App.scss';

const App = () => {

  const [beers, setBeers] = useState([]);

  useEffect(async () => {
    const beers = await getBeers();
    setBeers(beers);
  }, []);

  const [listOrder] = useState('');



  return (
    <div className={`app ${styles.app}`}>
      <CardList beers={beers} listOrder={listOrder} />
    </div>
  )
}

export default App;