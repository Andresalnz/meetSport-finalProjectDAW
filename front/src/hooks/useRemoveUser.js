import {useState, useEffect} from 'react'

 export default function useRemoveUser() {

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (userId) {
      async function RemoveUserwithId(url = '',dataId = {}){
        await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataId)  
        })
      }

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