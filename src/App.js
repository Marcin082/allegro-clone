import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { auth } from './config/firebase';
import { GlobalContext, GlobalProvider } from './context/GlobalState';

function App() {

const categories = ["Dom i ogród","Elektronika","Firma i usługi","Kolekcje i sztuka","Moda","Motoryzacja","Nieruchomości","Sport i turystyka","Supermarket","Uroda","Zdrowie"]

const { SetUser } = useContext(GlobalContext);

  useEffect(()=>{
    auth.onAuthStateChanged(authuser =>{
      if(authuser){
        console.log(authuser)
        SetUser(authuser)
      }
      else{
        SetUser(null)
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      
      <Switch>
          <Route exact path="/">
           <Header categories={categories}/>
           <Home />
          </Route>

          <Route  path="/rejestracja" >
            <Registration/>
          </Route>
          <Route  path="/logowanie" >
            <Login/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
