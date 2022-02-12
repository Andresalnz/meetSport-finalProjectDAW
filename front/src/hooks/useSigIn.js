import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
export default function useSignIn() {
  const navigate = useNavigate();
  const [signInErrorState, setSignInError] = useState({error: false, message: ''});

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
    .then((result) =>{
      if (result.ok) {
        setSignInError({error:false, message:'OK'})
        navigate('/')
      } else {
        setSignInError({error:true, message:'Error login'})
      }
      
    })
    .catch(error => {
      setSignInError({error:true, message:'Error login'})
    })
  }


  return [userSignIn, signInErrorState, user]
}