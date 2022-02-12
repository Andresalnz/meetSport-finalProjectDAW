import { useState } from 'react';
import { Add, Alert } from "grommet-icons";
import {
  Text,
  Select,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Layer,
  Heading,
  Image,
  Paragraph,
} from 'grommet';
import useListRequest  from '../hooks/useListRequest'

import { FormDown, FormUp, ShareOption } from 'grommet-icons';
import sendRequest from  '../hooks/useCreateRequest';
import ConfirmationModal from './ConfirmationModal';

export default function MSCard(props) {
  const list = useListRequest()
  //const [open, setOpen] = useState(false);

 
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);

   
  
  
  return <>
    <Card pad='small' gap='small' background={{color:'white'}}  round>
      <CardHeader direction='column' align='start' margin={{top:'small' }}>
        <Box direction='column' height='xsmall' width='xsmall'  >
          <Image fit='cover'  src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" ></Image>
          <Paragraph  margin={{top:'small', left:'small', bottom:'none', right:'none'}} size='large'>@Andy</Paragraph>
        </Box>    
        {/* <hr width="90%"/> */}
      </CardHeader>
      <Box>
        <CardBody margin={{horizontal:'small', vertical:'small'}}>
          <Box margin={{vertical:'small'}} >
            <Heading level="3" margin='none' >
              {
                props.title
              }
            </Heading>
          </Box>
          <Paragraph size='medium' textAlign='justify' margin='none'>
            {
              props.description
            }
          </Paragraph>
        </CardBody>  
        <CardFooter direction='column' margin={{horizontal:'small', bottom:'small'}} align='start'>
          <Text margin='none' weight='bold'>En {props.location} </Text>
          <Text margin='none' weight='bold' >a las {props.date}</Text>
          <Text margin='none' weight='bold'>Busco a { props.participants} personas</Text>
          <Text margin='none' weight='bold' >Precio: {props.price}</Text>
          <Button primary icon={<Add />} label="Add" onClick={() => setOpen(true)} />
          { /* Modal de confirmacion */ }
          {
            open && <ConfirmationModal
              open = {open}
              close = {onClose}
                    />
          }
        </CardFooter>
      </Box>
    </Card>
    
  </>
}