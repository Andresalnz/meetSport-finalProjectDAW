import {useState, useEffect} from 'react'
import {useAuth} from './useAuth'

 export default function useRemoveUser() {

  
  const [userId, setUserId] = useState(null);
 useEffect(() => {
   if (userId) {
    async function RemoveUserwithId(url = '',dataId = {}){
      console.log('1')
      await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataId)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
      })
    }
      console.log('ideeeee ', userId)
      if (userId ) {
        RemoveUserwithId(' http://localhost:3001/user/delete',{id: userId})
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userId')
        document.location.href = 'http://localhost:3000/login';
  
      }
   }
  
 },[userId])

  return setUserId
  }
  

//export default function useRemoveRequest() {  return RemoveRequest; }

