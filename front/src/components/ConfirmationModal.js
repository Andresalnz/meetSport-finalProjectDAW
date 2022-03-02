import { Box, Button, Grommet, Heading, Layer, Select, Text } from 'grommet';
import {useAuth} from '../hooks/useAuth'

export default function ConfirmationModal(props) {

  const {user}  = useAuth() 
  
  //Action remove publication or user
  const actionOk = (id) => {
    if (id ){
      props.action(id)
    } else {
      props.close()
    }
    props.close()
  }

  return (
    <Grommet>
      {props.open && (
        <Layer position="center" onClickOutside={props.close} onEsc={props.close}>
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              ¿Estas seguro?
            </Heading>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button 
                primary 
                color='#2874A6' 
                label="Sep" 
                onClick={() => actionOk( props.id,user.userId)} 
              />
              <Button  
                color='#2874A6'
                label="Nop" 
                onClick={props.close}  
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Grommet>
  );
};
 