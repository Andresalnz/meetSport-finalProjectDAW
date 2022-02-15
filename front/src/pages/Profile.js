import {Box,ResponsiveContext, Grid, Avatar, Text, Button, Tabs, Tab, Card, CardBody, CardHeader, CardFooter, } from 'grommet'
import {User} from 'grommet-icons'
import {useState, useContext} from 'react'
import MSCard from '../components/MSCard'
import useListRequest  from '../hooks/useListRequest'

export default function Profile (props) {

  //functions for change tabs
  const [index, setIndex] = useState(0)
  const onActive = (nextIndex) => setIndex(nextIndex)

  const [remove, setRemove] = useState('false');
  const removeTarjet = () => {
     setRemove(false)
  }
  const size = useContext(ResponsiveContext);
  const listPublication = useListRequest()

  return (
      <Box pad="small" gap="small">
        <Tabs   onActive={()=>removeTarjet} >
          <Tab title='Mis datos'>
            <Box direction='column' name margin={{horizontal:"25%"}} gap="small" pad="medium" width="50%" >
              <Box align='start' width="20px">
                <Text >@Andy</Text>
              </Box>
              <Box>
                <Text>Soy de Càdiz</Text>
              </Box>
              <Box>
                <Text>Me gustan estos deportes: Baloncesto y balonmano</Text>  
              </Box>  
            </Box>
          </Tab>
          <Tab title='Mis publicaciones' >
            <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
              {listPublication.map((card, index) => (
                <MSCard
                title={card.title}
                description={card.description} 
                location={card.location} 
                date={card.date} 
                participants={card.participants} 
                price={card.price}
                remove = {remove}
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