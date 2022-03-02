import {Box,ResponsiveContext, Grid, Button, Tabs, Tab, Header, } from 'grommet'
import {useState, useContext} from 'react'
import { useAuth } from '../hooks/useAuth'
//hooks
import useListRequest  from '../hooks/useListRequest'
import useRemoveRequest  from '../hooks/useRemoveRequest'
import useRemoveUser from '../hooks/useRemoveUser'
//Components
import MSCard from '../components/MSCard'
import MSInformationUser from '../components/MSInformationUser'
import ConfirmationModal from '../components/ConfirmationModal';

export default function Profile (props) {

  //button remove
  const [remove, setRemove] = useState(true);

  const size = useContext(ResponsiveContext);
  const listPublication = useListRequest()
  const removePublication = useRemoveRequest()
  const removeUser = useRemoveUser()
  const {user} = useAuth()

  //functin remove publication
  const actionRemove = (id) => {  
    removePublication(id)
  }

  //funcrion remove user and yours publications
  const actionRemoveUser = (id) => { 
    listPublication.map((card)=>{
      if (card.user.id === id) {
        removePublication(card.id)
      }
    })
    removeUser(id)
  }

  //function Log Out
  const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    document.location.href = 'http://localhost:3000/home';
  }

  //Confirmation modal 
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  
  return (
    <Box pad="small" gap="small">
      <Tabs color ="red"  >
        <Tab title='Mis datos' color="red">
          <Box direction='column' name margin={{horizontal:"25%"}} gap="small" pad="medium" width="50%" >
            <MSInformationUser/>  
            <Button color ="button" label="Darse de baja" onClick={() => setOpen(true)}></Button>
            <Button primary color ="button" label="Salir" onClick={logOut}></Button>
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
                  city={card.city.name}
                  remove = {remove}
                  action= {actionRemove}
                /> 
            ))}
          </Grid>
        </Tab>
      </Tabs>    
    </Box>
  )
} 