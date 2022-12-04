import { useState } from "react";
import balanceContext from "./balanceContext";

const BalanceState = (props)=>{
    const [balance, setBalance] = useState(0);

    const addBalance = (add)=>{
        setBalance(balance + add);
    }

    const deductBalance = (deduct) =>{
        setBalance(balance - deduct);
    }

    return (
        <balanceContext.Provider value={{balance, addBalance, deductBalance}}>
            {props.children}
        </balanceContext.Provider>
    )
}

export default BalanceState