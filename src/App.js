import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemCount} from './components/ItemCount';
import { NavBar } from './components/NavBar';
import { Provider } from './context/Provider';
import { ItemList } from './components/ItemList';
// import { useState } from 'react';

function App() {
//   const [count, setCount] = useState(0)

  return (
    <Provider>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      </div>
    </Provider>
  );
}

export default App;
