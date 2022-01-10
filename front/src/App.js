import { Grommet } from 'grommet';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import CreateRequest from './pages/CreateRequest';
import SignUp from './pages/SignUp';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
    },
    input: {
      weight: 400,
    },
    colors: {
      focus: 'dark-1',
    },
    
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'xsmall',
      margin: { vertical: '0', bottom: 'small', horizontal: '0' },
      weight: 600,
    },
    border: false,
    extend: () => `
      & textarea:focus, & input:focus {
        box-shadow: 0 0 1px 1px #7D4CDB;
      }
    `,
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} > 
              <Route path="create-request" element={<CreateRequest />} />
            </Route>
            <Route path="create-request" element={<Home />} >
              <Route index element={<CreateRequest />} />
            </Route>
            <Route path="sign-up" element = {<SignUp />}></Route>
          </Route>
        </Routes>
      </Router>
      
    </Grommet>
  );
}

export default App;
