import {useState, useEffect} from 'react'

export default function useListRequest() {

  const [listRequest, setlistRequest] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/publications')
    .then(result => result.json()) 
    .then(result => {
      setlistRequest(result)
      console.log(result)
    })
  },[])

  return listRequest
}