import {Box, Avatar, Text, Button, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, } from 'grommet'
import {User} from 'grommet-icons'
import {useState} from 'react'

export default function Profile () {

  //functions for change tabs
  const [index, setIndex] = useState(0)
  const onActive = (nextIndex) => setIndex(nextIndex)

  return (
    <Box>
      {/*Info user */}
      <Box>
        <Box>
          <Avatar 
            size='2xl'
            background='dark-4'
          >
            <User size='large'/>
          </Avatar>
          <Box direction='row'>
            <Box direction='column'>
              <Text>@Andy</Text>
              <Text>Soy de Càdiz</Text>
              <Text>Me gustan estos deportes: Baloncesto y balonmano</Text>    
            </Box>  
            <Box>
              <Button primary>Editar Perfil</Button>
            </Box> 
          </Box>
        </Box>
      </Box>
      {/*publication list and tab */}
      <Box>
        <Tabs activeIndex={index} onActive={onActive}>
          <Tab title='Mis publicaciones'>
           
          </Tab>
          <Tab title='Publicaciones que disfruté'>
            
          </Tab>
        </Tabs>
        
      </Box>
    </Box>
  )
} 