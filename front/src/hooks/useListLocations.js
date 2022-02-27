import {useState, useEffect} from 'react'

export default function useListLocations() {

  const [listLocation, setlistLocation] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/location')
    .then(result => result.json()) 
    .then(result => {
      setlistLocation(result)
    })
  },[])

  return listLocation
}