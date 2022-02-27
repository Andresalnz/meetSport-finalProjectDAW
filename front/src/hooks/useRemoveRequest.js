import {useState, useEffect} from 'react'
import {useAuth} from './useAuth'

 export default function useRemoveRequest() {

  
  const [publicationId, setpublicationId] = useState('null');
 useEffect(() => {
  async function RemoveRequestwithId(url = '',dataId = {}){
    console.log('iyo porque entars cohone')
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataId)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
    })
  }
    console.log('ideeeee ', publicationId)
    if (publicationId ) {
      RemoveRequestwithId(' http://localhost:3001/publication/delete',{id: publicationId})
      ///document.location.href = 'http://localhost:3000/home';

    }
 },[publicationId])

  return setpublicationId
  }
  

//export default function useRemoveRequest() {  return RemoveRequest; }

