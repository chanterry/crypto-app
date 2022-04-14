import React from 'react'
import './Coin.css'

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
  return (
      <>

    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'></img>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data '>
                <p className='coin-price'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(price)}</p> 
                <p className='coin-volume'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact", compactDisplay: "short"}).format(volume)}</p>
                {priceChange < 0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin-percent green'>+{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2, notation: "compact", compactDisplay: "short"}).format(marketcap)}</p>
            </div>
        </div>
        
    </div>
    </>)
}

export default Coin 
