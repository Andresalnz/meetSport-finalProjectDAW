import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function useCreateUser() {
  const [request, sendRequest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function postUser(url = '', data = {}) {
      await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          
        },
        body: JSON.stringify(data) 
      });
    }

    if (request) {
      postUser('http://localhost:3001/user/signup', request);
      navigate('/login')
    }
    
  }, [request]);

  return sendRequest;
}
