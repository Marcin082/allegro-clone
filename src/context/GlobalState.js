import React, { createContext, useReducer,useContext, useState } from 'react';

export const GlobalContext = createContext();



const AppReducer = (state, action) => {
    switch(action.type) {
      case('SET_USER'):
      return{
        ...state,
        user:action.user
      }
      default:
        return 

        }
      }
    
const initialstate ={
  user:null,
}
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer,initialstate);

    function SetUser(authuser){
      console.log(authuser)
      dispatch({
        type:'SET_USER',
        user:authuser
      })
    }
   
    
    return (<GlobalContext.Provider value={{
      user:state.user,
      logged:state.logged,
      SetUser
    }}>
      {children}
    </GlobalContext.Provider>);
  }