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
  Heading,
  Paragraph,
  Anchor,
} from 'grommet';
import ConfirmationModal from './ConfirmationModal';

export default function MSCard(props) {

  //Format date and money
  const date = new Date(props.date)
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  
  //Confirmation modal 
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
    
  return <>
    <Card pad='small' gap='small' background={{color:'white'}}  round>
      <CardHeader direction='column' align='start' margin={{ top:'small' }}>
        <Heading  margin={{top:'small', left:'small', bottom:'none', right:'none'}} level="2">
          {

          'Me llamo '+  props.user + ' y...'

          }
        </Heading>
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
          <Button color='button'  label={props.sport} margin={{top:'small'}}/>
          <Button color='button'  label={props.city} margin={{top:'small'}} />
        </CardBody>  
        <CardFooter direction='column' margin={{horizontal:'small', bottom:'small'}} align='start'>
          <Text margin='none' weight='bold'>En {props.location} </Text>
          <Text margin='none' weight='bold'>a las {date.getHours() + ':' + date.getMinutes() + ' del ' + date.getDate() + '/' }{date.getMonth() + 1}</Text>
          <Text margin='none' weight='bold'>Busco a { props.participants} personas</Text>
          <Text margin='none' weight='bold'>Precio: {formatter.format (props.price)}</Text>
          {/*button remove publication or add publication */}
          {   
           props.remove ? 
            <Button primary color='button' icon={<Trash />} label="Delete" onClick={() => setOpen(true)} />
            : 
            // <Button primary color='button' icon={<Add />} label="Add" onClick={() => setOpen(true)} />
            <Heading level='3'> 
            {    
              'Escribeme, este es mi correo, ¡Unete!: '
            }
            <Anchor>{props.mail}</Anchor>
            </Heading>
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