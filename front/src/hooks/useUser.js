import {useState, useEffect} from 'react'
import { useAuth } from './useAuth';

export default function useListRequest() {
  const {user} = useAuth()
  const [userObject, setUser] = useState({})
   useEffect(() => {
    fetch(`http://localhost:3001/user/${user.userId}`)
    .then(result => result.json()) 
    .then(result => {
      console.log("que devuelves ", result)
      setUser(result)    
    })
  },[])
  console.log("que devuelves2 ", userObject)
  return userObject
}