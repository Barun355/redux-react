import React, { useContext } from 'react'
import balanceContext from '../context/balanceContext'
import Count from 'react-countup'
import accountBalanceContext from '../context/AccountBalance/accountBalanceContext';

const Home = () => {

  const { balance, addBalance, deductBalance } = useContext(balanceContext);
  const { accountBalance } = useContext(accountBalanceContext);

  return (
    <>
      <div className="container my-2">
        <button className="btn btn-primary mx-2" onClick={() => { deductBalance(50) }}>-</button>
        <span className="text-center">Update the Balance {balance}</span>
        <button className="btn btn-primary mx-2" onClick={() => { addBalance(50) }}>+</button>
      </div>
      <div class="container">
        <p className="container">Counter value <span><Count start={200} end={1000} duration={2} delay={0} prefix={"+"} /></span></p>
      </div>
      <div className="container">
        <p> Account Balance {accountBalance}</p>
      </div>
    </>
  )
}

export default Home
