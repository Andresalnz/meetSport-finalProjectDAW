import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from './useAuth';

export default function useCreateRequest() {
  const [request, sendRequest] = useState(null);
  const navigate = useNavigate();
  const {user} = useAuth()

  useEffect(() => {
    async function postPublication(url = '', data = {}) {
      // Opciones por defecto estan marcadas con un *
      data.userId = user.userId
      await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization':`Bearer ${user.token}`
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
    }
    console.log('request: ', request);
    if (request) {
      postPublication('http://localhost:3001/publication/new', request);
      document.location.href = 'http://localhost:3000/home';
    }
    
  }, [request]);

  return sendRequest;
}

