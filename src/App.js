import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
// import ItemCount from './components/ItemCounter';
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
      <h1>Online Coffee shop</h1>
      <p>Soon available</p>
      {/* <ItemCount stock={15} count={count} setCount={setCount}/> */}
    </div>
    </Provider>
  );
}

export default App;
