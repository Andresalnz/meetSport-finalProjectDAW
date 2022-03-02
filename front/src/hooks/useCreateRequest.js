import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from './useAuth';

export default function useCreateRequest() {

  const [request, sendRequest] = useState(null);
  const {user} = useAuth()

  useEffect(() => {
    async function postPublication(url = '', data = {}) {
      data.userId = user.userId
      await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization':`Bearer ${user.token}`
        },
        body: JSON.stringify(data) 
      });
    }
    
    if (request) {
      postPublication('http://localhost:3001/publication/new', request);
      document.location.href = 'http://localhost:3000/home';
    }
    
  }, [request]);

  return sendRequest;
}

