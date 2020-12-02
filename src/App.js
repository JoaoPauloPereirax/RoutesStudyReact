import React from 'react';
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';



function App(){
  return (
    
    <BrowserRouter>
     <header>
       <h1>Meu site de teste</h1>
       <ul>
         <li><Link to="/">HOME</Link></li>
         <li><Link to="/sobre">SOBRE</Link></li>
         <li><Link to="/categoria?tipo=esportes">ESPORTES</Link></li>
         <li><Link to="/categoria?tipo=noticias">NOTÍCIAS</Link></li>
         <li><Link to="/categoria?tipo=viagens">VIAGENS</Link></li>
         <li><Link to="/quem-somos">QUEM SOMOS</Link></li>
       </ul>
     </header><hr/>

     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/sobre'>
         <Sobre/>
       </Route>
       <Route path='/categoria'>
         <Categoria/>
       </Route>
       <Route path='/quem-somos'>
          <Redirect to='/sobre'/>
       </Route>
       <Route path='*'>
         <h4>Página não encontrada!</h4> 
       </Route>
     </Switch>

     <hr/>
     <footer>
       Todos os direitos reservados.
     </footer>
    </BrowserRouter>
    
  );
}

export default App;