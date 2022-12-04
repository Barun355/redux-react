import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import BalanceState from './context/BalanceState';
import AccountBalanceState from './context/AccountBalance/AccountBalanceState';

function App() {
  return (
    <BalanceState>
      <AccountBalanceState>
        <div className="App">
          <Navbar />
          <Home />
        </div>
      </AccountBalanceState>
    </BalanceState>
  );
}

export default App;
