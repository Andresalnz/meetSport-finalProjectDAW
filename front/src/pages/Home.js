import { useContext } from 'react';
import {
  Text,
  Grid,
  ResponsiveContext
} from 'grommet';

import { Outlet } from 'react-router-dom';
import MSCard from '../components/MSCard';

const cards = Array(20)
  .fill()
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export default function Home() {
  const size = useContext(ResponsiveContext);

  return <>
      <Grid columns={size !== 'small' ? 'medium' : '100%'} gap="small">
        {cards.map((card, index) => (
          <MSCard></MSCard>
        ))}
      </Grid>
      <Outlet />
  </>
}