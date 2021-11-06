import { Header, Button, Box, Anchor, Nav, Text } from 'grommet';
import { Yoga } from 'grommet-icons';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const MSHeaderAnchor = styled(Anchor)`
  display: flex;
`

const items = [
  { label: <Text size="medium" >Home</Text>, href: '#' },
  { label: <Text size="medium" >Sign up</Text>, href: '#' },
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
            color="brand"
            pad="small"
            label={<Text size="medium" color="light-1" weight="bold" >Create Request</Text>}
            onClick={() => {}}
          />
        </Link>
        {userItems.map(item => (
          <Anchor href={item.href} label={item.label} key={item.label} color="dark-1" />
        ))}
      </Nav>
  </Header>
  );
}