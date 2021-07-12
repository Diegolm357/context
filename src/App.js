import React from 'react';
import Navbars from './components/Navbars';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListBlanco from './components/ItemListBlanco';
import ItemList from './components/ItemList';
import ItemListEspumante from './components/ItemListEspumante';
import Carrito from './components/Carrito';
import UserContext from './context/UserContext';
import { useState } from 'react';

function App() {
  const [carrito, setCarrito] = useState([]);
 
  return (
    <>
      <Router>
        <UserContext.Provider value={{ carrito, setCarrito }}>
      <header>
     <Navbars/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/ItemListBlanco' component={ItemListBlanco} />
            <Route path='/ItemList' component={ItemList} />
            <Route path='/ItemListEspumante' component={ItemListEspumante} />
            <Route path='/Carrito' component={Carrito } />
</Switch>
         
          </header> 
                     
          </UserContext.Provider>
         
       </Router>
        
    </>
  );
}

export default App;





