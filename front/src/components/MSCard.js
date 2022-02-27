import { useState } from 'react';
import { Add, Trash } from "grommet-icons";
import {
  Text,
  
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tag ,
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

  const date = new Date(props.date)
 
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })
 




    {/*Confirmation modal */}
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    
  return <>
    <Card pad='small' gap='small' background={{color:'white'}}  round>
      <CardHeader direction='column' align='start' margin={{top:'small' }}>
        {/* <Box direction='row' height='xsmall' width='xsmall'  > */}
          <Heading  margin={{top:'small', left:'small', bottom:'none', right:'none'}} level="2">
     

            {

           'Soy '+  props.user

            }

          </Heading>
        {/* </Box>     */}
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
          <Button  label={props.sport} />
        </CardBody>  
        <CardFooter direction='column' margin={{horizontal:'small', bottom:'small'}} align='start'>
          <Text margin='none' weight='bold'>En {props.location} </Text>
          <Text margin='none' weight='bold' >a las {date.getHours() + ':' + date.getMinutes() + ' del ' + date.getDate() + '/' + date.getMonth()+1 }</Text>
          <Text margin='none' weight='bold'>Busco a { props.participants} personas</Text>
          <Text margin='none' weight='bold' >Precio: {formatter.format (props.price)}</Text>
          {
            
           props.remove ? 
            <Button primary icon={<Trash />} label="Delete" onClick={() => setOpen(true)} />
            : 
            <Button primary icon={<Add />} label="Add" onClick={() => setOpen(true)} />
          }
          
          { /* Modal de confirmacion */ }
          {
            open && <ConfirmationModal
              open = {open}
              close = {onClose}
              id = {props.id}
              action = {props.action}
                    />
          }
        </CardFooter>
      </Box>
    </Card>
    
  </>
}