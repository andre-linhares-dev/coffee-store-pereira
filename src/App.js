import './App.css';
import { Provider } from './context/Provider';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router/routes';
// import { ItemListContainer } from './components/ItemListContainer';
// import {ItemCount} from './components/ItemCount';
// import { NavBar } from './components/NavBar';
// import { ItemList } from './components/ItemList';
// import { useState } from 'react';


function App() {
//   const [count, setCount] = useState(0)

  return (
    <Provider>
    <div className="App">
      {/* <NavBar/>
      <ItemListContainer/> */}
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
