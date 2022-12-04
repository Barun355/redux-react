import React, { useState } from 'react'
import accountBalanceContext from './accountBalanceContext'

const AccountBalanceState = (props) => {
    const [accountBalance, setAccountBalance] = useState(1111110);

    const addBalance = add =>{ setAccountBalance( accountBalance + add); }

    const deductBalance = deduct =>{ setAccountBalance( accountBalance + deduct); }

  return (
    <accountBalanceContext.Provider value={{accountBalance, addBalance, deductBalance}}>
        {props.children}
    </accountBalanceContext.Provider>
  )
}


export default AccountBalanceState