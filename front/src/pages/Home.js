import { useContext } from 'react';
import {
  Text,
  Grid,
  ResponsiveContext
} from 'grommet';

import { Outlet } from 'react-router-dom';
import MSCard from '../components/MSCard';
import useListRequest  from '../hooks/useListRequest'
import { useAuth } from '../hooks/useAuth';



export default function Home() {

  const size = useContext(ResponsiveContext);
  const listPublication = useListRequest()
  // const actionAdd = () => {
  //   console.log('añadir a publicacion')

    
  // }
  
  return <>
      <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
        {listPublication.map((card, index) => (
          <MSCard 
          title={card.title}
          description={card.description} 
          location={card.location} 
          date={card.date} 
          participants={card.participants} 
          price={card.price}
          sport={card.sport.name}
          user = {card.user.username}
          //action = {actionAdd}
          >
          </MSCard>
        ))}
      </Grid>
      <Outlet />
  </>
}