import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const valueToken = sessionStorage.getItem('token')
  const [token, setToken] = useState(valueToken);
  
  
  return (
    <AuthContext.Provider value={{token, setToken}}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

export const RequireAuth = ({children}) => {
  const location = useLocation()
  const {token} = useContext(AuthContext)
  if(!token) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children
} 

export const useAuth = () => useContext(AuthContext)

