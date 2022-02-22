import { Header, Button, Box, Anchor, Nav, Text } from 'grommet';
import { Yoga } from 'grommet-icons';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import useSignIn from '../hooks/useSigIn';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const MSHeaderAnchor = styled(Anchor)`
  display: flex;
`

const items = [
  { label: <Text size="medium" >Home</Text>, href: "/home" },
  { label: <Text size="medium" >Sign in</Text>, href: "/login" },
  { label: <Text size="medium" >Sign up</Text>, href: "/sign-up" }
];

const userItems = [
  { label: <Text size="medium" >Home</Text>, href: '#' },
  { label: <Text size="medium" >History</Text>, href: '#' },
  { label: <Text size="medium" >Profile</Text>, href: '#' },
];

const padHeader = {
  top: "small",
  bottom: "small",
  left: "medium",
  right: "medium",
};

export default function MSHeader() {

  const [signIn,signInErrorState] = useSignIn()
  const {token, setToken} = useAuth()
  const [remove, setRemove] = useState(false);

  return (
  <Header 
    animation="fadeIn"
    elevation="small"
    pad={padHeader}  
    background="light-3" 
    align="center">
     <Box 
      direction="row" 
      align="center" 
      gap="small">
        <MSHeaderAnchor 
          flex="true" 
          color="dark-1" 
          size="x-Large" 
          gap="xxsmall"
          icon={<Yoga size="large" color="brand" />} 
          label="Meet|Sports"  />
      </Box>
      <Nav align="center" direction="row">
        <Link to="/create-request">
          <Button
            primary
            color="#2874A6 "
            pad="small"
            label={<Text size="medium" color="light-1" weight="bold" >Create Request</Text>}
            onClick={() => {}}
          />
        </Link>
        {
          token ? 
            userItems.map(item => (
              <NavLink exact to={item.href} style={(isActive) => ({color: isActive ? "green" : "black", textDecoration: "none"}) }>{item.label}</NavLink>
            )) 
            :
            items.map(item => (
              <NavLink exact to={item.href} style={(isActive) => ({color: isActive ? "green" : "black", textDecoration: "none"}) }>{item.label}</NavLink>
            )) 
 
        }
        
      </Nav>
  </Header>
  );
}