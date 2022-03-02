import {useState, useEffect} from 'react'
import { useAuth } from './useAuth';

export default function useRemoveRequest() {

  const [publicationId, setpublicationId] = useState(null);
  const {user} = useAuth()

    useEffect(() => {
      if(publicationId) {
        async function RemoveRequestwithId(url = '',dataId = {}){
          await fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':`Bearer ${user.token}`
            },
            body: JSON.stringify(dataId) 
          })
        }
        
        if (publicationId ) {
          RemoveRequestwithId(' http://localhost:3001/publication/delete',{id: publicationId})
          document.location.href = 'http://localhost:3000/home'
        }
      } 
    },[publicationId])
  
  return setpublicationId

}

