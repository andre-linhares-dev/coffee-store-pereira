import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemCount} from './components/ItemCount';
import { NavBar } from './components/NavBar';
import { Provider } from './context/Provider';
// import { useState } from 'react';

function App() {
//   const [count, setCount] = useState(0)

  return (
    <Provider>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <div className="border-2 border-teal-800 p-10 align-middle">
         <h1>Online Coffee shop</h1>
         <p>Soon available</p>
      </div>
      <ItemCount stock={5}/>
    </div>
    </Provider>
  );
}

export default App;
