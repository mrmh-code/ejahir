import React from 'react';
import {   Navigate, useLocation } from 'react-router-dom';
 
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children}) => {
  const {myUser}=useUserContext();
  const {location}=useLocation();
  if(myUser){
    return children;
  }
  return <Navigate to='/' state={{from:location}}/>
};
export default PrivateRoute;
