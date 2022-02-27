import {useState, useEffect} from 'react'

export default function useListSports() {

  const [listSports, setlistSports] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/sport')
    .then(result => result.json()) 
    .then(result => {
      setlistSports(result)
    })
  },[])

  return listSports
}