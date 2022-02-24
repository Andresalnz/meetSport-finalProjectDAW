import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useAuth } from './useAuth';


export default function useSignIn() {
  const navigate = useNavigate();
  const [signInErrorState, setSignInError] = useState({error:false, message:'OK'});
  const {setUser} = useAuth({})
  

  const url = 'http://localhost:3001/signin'
  const userSignIn =  (data) => {
    setSignInError({error:false, message:'OK'})
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'  
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then((result) => {
     
      if (result.ok) {
       return result.json()
      } else {
        throw new Error('NOO LOGIN')
      }
    })
      
    .then((result) =>{
      sessionStorage.setItem('token', result.token)
      sessionStorage.setItem('userId', result.id)
      setUser({token: result.token, userId: result.id})
      setSignInError({error:false, message:'OK'})
      navigate('/')
    })
    .catch(error => {
      setSignInError({error:true, message:'Error login'})
    })
  }


  return [userSignIn, signInErrorState ]
}