import { Box, Button, Grommet, Heading, Layer, Select, Text } from 'grommet';
import {useState} from 'react-dom'

export default function ConfirmationModal(props) {
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
                    <Button label="Sep" onClick={props.close} />
                    <Button label="Nop" onClick={props.close} color="dark-3" />
                  </Box>
                </Box>
              </Layer>
          )}
          </Grommet>
     );
    };
 