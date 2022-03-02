import {useState, useEffect} from 'react'
import { useAuth } from './useAuth';

export default function useListRequest() {

  const {user} = useAuth()
  const [userObject, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/user/${user.userId}`)
    .then(result => result.json()) 
    .then(result => {
      setUser(result)    
    })
  },[])

  return userObject
}