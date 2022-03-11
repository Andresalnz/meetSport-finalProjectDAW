import { useContext } from 'react';
import {
  Grid,
  ResponsiveContext,
  Header
} from 'grommet';
import { Outlet } from 'react-router-dom';
import MSCard from '../components/MSCard';
import useListRequest  from '../hooks/useListRequest'

export default function Home() {

  const size = useContext(ResponsiveContext);
  const listPublication = useListRequest()
  
  return <>
      <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="large">
        {

        listPublication.length === 0 ?
          <Header>No hay niguna publicacion actualmente</Header>
        :
        listPublication.map((card, index) => (
          <MSCard 
            title={card.title}
            description={card.description} 
            location={card.location} 
            date={card.date} 
            participants={card.participants} 
            price={card.price}
            mail= {card.user.mail}
            sport={card.sport.name}
            user = {card.user.username}
            city = {card.city.name}
          >
          </MSCard>
        ))}
      </Grid>
      <Outlet />
  </>
}