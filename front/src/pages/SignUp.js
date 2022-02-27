import {
    Box,
    Heading,
    CheckBox,
    CheckBoxGroup,
    Form,
    FormField,
    Grid,
    Grommet,
    RadioButtonGroup,
    RangeInput,
    Select,
    Text,
    TextArea,
    TextInput,
    ThemeContext,
    Button,
} from 'grommet';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import useListSports  from '../hooks/useListSports'
import useListLocations from '../hooks/useListLocations';
import useCreateUser from '../hooks/useCreateUser'

export default function SignUp(props) {
    const listLocations = useListLocations()

    const locations=listLocations.map((i)=>{ return i.name  })

    const sendRequest = useCreateUser();

    
    return (
        <Box  fill align="center" justify="center" width="medium">
            <Box  width="medium">
                <Heading level={2}>
                    SignUp
                </Heading>
                {/* user information*/}
                    <Form
                    onSubmit={({ value }) => sendRequest(value)}>
  
     
                        <FormField name='username' label='Username' >
                            <TextInput name='username' id="username" placeholder='Username' required></TextInput>
                        </FormField>
                        <FormField name='mail' label='Mail' margin={{top:"20px"}}>
                            <TextInput name='mail'id="username" placeholder='Mail' required></TextInput>
                        </FormField>
                        <FormField name='password' label='Contraseña' margin={{top:"20px"}}>
                            <TextInput name='password' id="password" placeholder='Contraseña' required></TextInput>
                        </FormField>
                        {/* <FormField name='location' label='Ciudad' margin={{top:"20px"}}>
                            <TextInput name='location' id="username" placeholder='Ciudad' required></TextInput>
                        </FormField> */}
                {/*Sports */}
                        <Box align='start'  margin={{top:'20px'}}>
                            <Box direction='row' gap='small'>
                                <FormField name="subscribe">
                                    <Text id="chooseSport">Coloca donde vives</Text>
                                    <Box direction='row' margin={{vertical:"10px"}}>
                                        <RadioButtonGroup name="locationId" margin={{right:'10px'}}  options={locations} direction='column'/> 
                                    </Box>
                                </FormField>
                            </Box>
                        </Box>
                    {/*Options  */}
                        <Box gap='small' direction='row' justify='end' alignSelf='end' >
                            <Button secondary label="Cancelar" color="dark-3"/>
                            <Button primary type="submit" label="Enviar"/>
                        </Box>
                        
                    </Form>
            </Box>
                

        </Box>

       

    
    );   
}