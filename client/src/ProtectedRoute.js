import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from './context';

function ProtectedRoute({ component: Component, ...other }) {
  const { state } = useContext(Context);

  return ( 
    <Route 
      render={props => !state.isAuth ? <Redirect to="/login"/> : <Component {...props}/>}
      {...other} 
    />
  )
}

export default ProtectedRoute;
