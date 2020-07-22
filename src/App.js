import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Main} from './pages/Main.js';
import {Ayuda} from './pages/Ayuda.js';
import {Contacto} from './pages/Contacto.js';
import {Navbar} from './components/Navbar/Navbar.js';


function App() {
  return (
        <BrowserRouter>
          <div className="container">
            <Navbar/>
            <Switch>
              <Route path={'/'} exact component={Main}/>
              <Route path={'/ayuda'} component={Ayuda}/>
              <Route path={'/contacto'} component={Contacto}/>
            </Switch>
          </div>
        </BrowserRouter>
  );
};

export default App;
