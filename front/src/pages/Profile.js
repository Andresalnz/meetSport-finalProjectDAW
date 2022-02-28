import {Box,ResponsiveContext, Grid, Avatar, Text, Button, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Header, } from 'grommet'
import {User} from 'grommet-icons'
import {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";

import MSCard from '../components/MSCard'
import { useAuth } from '../hooks/useAuth'
import useListRequest  from '../hooks/useListRequest'
import useListLocations  from '../hooks/useListLocations'
import useRemoveRequest  from '../hooks/useRemoveRequest'
import useRemoveUser from '../hooks/useRemoveUser'

import MSInformationUser from '../components/MSInformationUser'
import ConfirmationModal from '../components/ConfirmationModal';

export default function Profile (props) {
  const navigate = useNavigate();

  //functions for change tabs
  const [index, setIndex] = useState(0)
  const onActive = (nextIndex) => setIndex(nextIndex)
  const [remove, setRemove] = useState(true);
  const removeTarjet = () => {
     setRemove(false)
  }


  const size = useContext(ResponsiveContext);
  const listPublication = useListRequest()
  const {user} = useAuth()
  const removePublication = useRemoveRequest()
  const reemoveUser = useRemoveUser()
  
 

  //console.log('use',use)
  
  
  

  const actionRemove = (id) => {
    console.log('borrar publicacion')  
    removePublication(id)

  }
  const actionRemoveUser = (id) => {
    console.log('borrar user')  
    reemoveUser(id)

  }

  const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    document.location.href = 'http://localhost:3000/home';
  
  }

  {/*Confirmation modal */}
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  
  return (
      <Box pad="small" gap="small">
        <Tabs   onActive={()=>removeTarjet} >
          <Tab title='Mis datos'>
            <Box direction='column' name margin={{horizontal:"25%"}} gap="small" pad="medium" width="50%" >
              <MSInformationUser>
              </MSInformationUser> 
              <Button label="Darse de baja" onClick={() => setOpen(true)}></Button>
              <Button label="Salir" onClick={logOut}></Button>

              {
            open && <ConfirmationModal
              open = {open}
              close = {onClose}
              id={user.userId}
              action = {actionRemoveUser}
                    />
          }
            </Box>
            
          </Tab>
          <Tab title='Mis publicaciones' >
            <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
              {
              listPublication.length === 0 ?
              <Header>Aún no has creado ninguna publicacion</Header>
              :
              listPublication.map((card, index) => (
                user.userId === card.user.id &&
                <MSCard
                id= {card.id}
                title={card.title}
                description={card.description} 
                location={card.location} 
                date={card.date} 
                participants={card.participants} 
                price={card.price}
                user = {card.user.username}
                sport={card.sport.name}
                remove = {remove}
                action= {actionRemove}
                >
                </MSCard>
              ))}
            </Grid>
          </Tab>
          <Tab title='Publicaciones que disfruté'>      
          </Tab>
        </Tabs>    
      </Box>
  )
} 