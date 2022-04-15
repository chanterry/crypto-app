import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Coin from './Coin';
import './Crypto.css'
import './Coin.css'

function Crypto() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const urlAPi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'

  // Requête de l'API
  useEffect (() => {
    axios
        .get(urlAPi)
        .then(res => {
            setCoins(res.data)
        })
        .catch(error => console.log(error))
  }, []); 

  // Barre de recherche de la crypto monnaie
  const handleChange = e => {
      setSearch(e.target.value)
  }

  // Retourne la recherche en miniscules
  const filterCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Crypto App</h1> 
        <form>
            <input 
              type='text' 
              className='coin-input' 
              placeholder='Search a currency'
              onChange={handleChange}
            />
        </form>
      </div>    

      <div className='coin-row'>
        <div className='coin-title'>
          <h1>Cryptocurrencies</h1>
        </div>
        <div className='coin-data'>
          <p className='coin-price' id='title-bold'>Price</p>
          <p className='coin-volume' id='title-bold'>Volume</p>
          <p className='coin-percent' id='title-bold'>24h</p>
          <p className='coin-marketcap' id='title-bold'>Market Cap</p>
        </div>
      </div>

      {filterCoins.map(coin =>{
          return(
            <Coin 
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          )
      })}
    </div>
  );
}

export default Crypto;