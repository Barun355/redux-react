import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Provider } from 'react-redux';
import store from './Redux/store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
