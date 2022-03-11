import { Header, Button, Box, Anchor, Nav, Text } from 'grommet';
import { Yoga } from 'grommet-icons';
import styled from 'styled-components';
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

const MSHeaderAnchor = styled(Anchor)`
  display: flex;
`
const items = [
  { label: <Text size="medium" >Inicio</Text>, href: "/home" },
  { label: <Text size="medium" >Iniciar Sesion</Text>, href: "/login" },
  { label: <Text size="medium" >Crear Cuenta</Text>, href: "/sign-up" }
];

const userItems = [
  { label: <Text size="medium" >Inicio</Text>, href: '/home' },
  { label: <Text size="medium" >Perfil</Text>, href: '/profile' },
];

const padHeader = {
  top: "small",
  bottom: "small",
  left: "medium",
  right: "medium",
};

export default function MSHeader() {

  const {user} = useAuth()

  return (
    <Header 
      animation="fadeIn"
      elevation="small"
      pad={padHeader}  
      background="light-3" 
      align="center"
    >
      <Box 
        direction="row" 
        align="center" 
        gap="small"
      >
        <MSHeaderAnchor 
          flex="true" 
          color="dark-1" 
          size="x-Large" 
          gap="xxsmall"
          icon={<Yoga size="large" color="#2874A6" />} 
          label="Meet|Sports"  
        />
      </Box>
        <Nav align="center" direction="row">
          <Link to="/create-request">
            <Button
              primary
              color="button"
              pad="small"
              label={<Text size="medium" color="light-1" weight="bold" >¡Crea tu Publicacion!</Text>}
              onClick={() => {}}
            />
          </Link>
          {
            user.token ? 
              userItems.map(item => (
                <NavLink 
                  exact 
                  to={item.href}  
                  style={{ color:"#2874A6", textDecoration: "none"}}
                >
                  {

                  item.label

                  }
                </NavLink>
              )) 
              :
              items.map(item => (
                <NavLink 
                  exact 
                  to={item.href} 
                  style={{ color:"#2874A6", textDecoration: "none"}}
                >
                  {

                  item.label
                  
                  }
                </NavLink>
              )) 
          }  
        </Nav>
    </Header>
  )
}