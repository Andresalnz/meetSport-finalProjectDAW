import { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const valueToken = sessionStorage.getItem('token') // 
  const valueUserId = sessionStorage.getItem('userId')
  const [user, setUser] = useState({token: valueToken, userId: valueUserId});

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

export const RequireAuth = ({children}) => {
  const location = useLocation()
  const {user} = useContext(AuthContext)
  if(!user.token) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children
} 

export const useAuth = () => useContext(AuthContext)

