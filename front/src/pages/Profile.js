import {Box,ResponsiveContext, Grid, Avatar, Text, Button, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, } from 'grommet'
import {User} from 'grommet-icons'
import {useState, useContext} from 'react'
import MSCard from '../components/MSCard'
import { useAuth } from '../hooks/useAuth'
import useListRequest  from '../hooks/useListRequest'
import useRemoveRequest  from '../hooks/useRemoveRequest'
import MSInformationUSer from '../components/MSInformationUser'
import useUser from '../hooks/useUser'

export default function Profile (props) {

  //functions for change tabs
  const [index, setIndex] = useState(0)
  const onActive = (nextIndex) => setIndex(nextIndex)
  const [remove, setRemove] = useState(true);
  const removeTarjet = () => {
     setRemove(false)
  }


  const size = useContext(ResponsiveContext);
  const listPublication = useListRequest()
  const {user,setUser} = useAuth()
  const removePublication = useRemoveRequest()
  const use = useUser()
  console.log('eii ', use)
  const actionRemove = (id) => {
    console.log('borrar publicacion')
    
    removePublication(id)

  }
  return (
      <Box pad="small" gap="small">
        <Tabs   onActive={()=>removeTarjet} >
          <Tab title='Mis datos'>
            <Box direction='column' name margin={{horizontal:"25%"}} gap="small" pad="medium" width="50%" >
              <MSInformationUSer
              name={use.username}
              >
              </MSInformationUSer> 
            </Box>
          </Tab>
          <Tab title='Mis publicaciones' >
            <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
              {listPublication.map((card, index) => (
                <MSCard
                id= {card.id}
                title={card.title}
                description={card.description} 
                location={card.location} 
                date={card.date} 
                participants={card.participants} 
                price={card.price}
                user = {card.user.username}
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