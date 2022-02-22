import { Grommet } from 'grommet';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import CreateRequest from './pages/CreateRequest';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import { AuthProvider, RequireAuth } from './hooks/useAuth';

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
    <AuthProvider>
      <Grommet theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} > 
                <Route path="create-request" element={<RequireAuth> <CreateRequest /></RequireAuth>} />
              </Route>
              
              <Route path="create-request" element={<Home />} >
                <Route index element={<RequireAuth> <CreateRequest /></RequireAuth>} />
              </Route>
              <Route path="sign-up" element = {<SignUp />}></Route>
              <Route path="login" element = {<SignIn />}></Route>
              <Route path="profile" element = {<Profile />}></Route>
            </Route>
          </Routes>
        </Router>
      </Grommet>
    </AuthProvider>
  );
}

export default App;
