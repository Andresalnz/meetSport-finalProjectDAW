import {
  Box,
  Form,
  FormField,
  RadioButtonGroup,
  Text,
  TextInput,
  Button
} from 'grommet';
import { Yoga } from 'grommet-icons';
import useListLocations from '../hooks/useListLocations';
import useCreateUser from '../hooks/useCreateUser'
import useListSports from '../hooks/useListSports'

export default function SignUp(props) {

  const listLocations = useListLocations()
  const listsports = useListSports()
  const locations=listLocations.map((location)=>{ return location.name  })
  const sports = listsports.map((sport)=>{ return sport.name  })
  const sendRequest = useCreateUser()

  //Clear inputs
  const emptyInputs = () => {
    document.getElementById('username').value = ''
    document.getElementById('mail').value = ''
    document.getElementById('password').value = ''
  }

  return (
    <Box  fill align="center" justify="center" width="medium">
      <Box align="center" width="medium">
        <Yoga size="xlarge" color="button" />
      </Box>
      <Box  width="medium">
        {/* user information*/}
        <Form
            onSubmit={({ value }) => sendRequest(value)}
        >
          <FormField name='username' label='Username' >
              <TextInput name='username' id="username" placeholder='Username' required></TextInput>
          </FormField>
          <FormField name='mail' label='Mail' margin={{top:"20px"}}>
              <TextInput name='mail'id="mail" placeholder='Mail' required></TextInput>
          </FormField>
          <FormField name='password' label='Contraseña' margin={{top:"20px"}}>
              <TextInput type='password' name='password' id="password" placeholder='Contraseña' required></TextInput>
          </FormField>
        {/*Location */}
          <Box align='start'  margin={{top:'20px'}}>
            <Box direction='row' gap='small'>
              <FormField name="subscribe">
                <Text id="chooseSport">Coloca donde vives y tus deportes favoritos</Text>
                <Box direction='row' margin={{vertical:"10px"}}>
                  <RadioButtonGroup 
                    id="locations" 
                    name="locationId" 
                    margin={{right:'10px'}}  
                    options={locations} 
                    direction='column'
                  /> 
                  {/* Sports */}
                  <RadioButtonGroup 
                    id="locations" 
                    name="sportId" 
                    margin={{right:'10px'}}  
                    options={sports} 
                    direction='column'
                  /> 
                </Box>
              </FormField>
            </Box>
          </Box>
        {/*Options  */}
          <Box gap='small' direction='row' justify='end' alignSelf='end' >
            <Button color="button" label="Cancelar" onClick={emptyInputs}/>
            <Button primary color="button" type="submit" label="Enviar"/>
          </Box>
        </Form>
      </Box>
    </Box>
  )   
}