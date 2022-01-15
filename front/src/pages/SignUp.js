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

export default function SignUp(props) {

    
    return (
        <Box  fill align="center" justify="center" width="medium">
            <Box  width="medium">
                <Heading level={2}>
                    SignUp
                </Heading>
                {/* user information*/}
                    <Form>
                        <FormField name='text' label='Username' >
                            <TextInput id="username" placeholder='Username' required></TextInput>
                        </FormField>
                        <FormField name='text' label='Mail' margin={{top:"20px"}}>
                            <TextInput id="username" placeholder='Mail' required></TextInput>
                        </FormField>
                        <FormField name='text' label='Contraseña' margin={{top:"20px"}}>
                            <TextInput id="username" placeholder='Contraseña' required></TextInput>
                        </FormField>
                        <FormField name='text' label='Ciudad' margin={{top:"20px"}}>
                            <TextInput id="username" placeholder='Ciudad' required></TextInput>
                        </FormField>
                {/*Sports */}
                        <Box align='start'  margin={{top:'20px'}}>
                            <Box direction='row' gap='small'>
                                <FormField name="subscribe">
                                    <Text id="chooseSport">Elige deportes (máximo 3)</Text>
                                    <Box direction='row' margin={{top:"10px"}}>
                                        <CheckBoxGroup name="sport" margin={{right:'10px'}}  options={["Baloncesto","Fútbol","Runner"]} direction='column'/> 
                                        <CheckBoxGroup name="sport" margin={{right:'10px'}}  options={["Baloncesto","Fútbol","Runner"]} direction='column'/>
                                        <CheckBoxGroup name="sport" margin={{right:'10px'}}  options={["Baloncesto","Fútbol","Runner"]} direction='column'/>
                                    </Box>
                                </FormField>
                            </Box>
                        </Box>
                   {/*Upload Image */}       
                            <Box direction="row" align='center' margin={{top:"20px", bottom:"20px"}}>
                                <Text size="medium" >Add Image</Text>
                                <Box pad={{left:'large'}} >
                                    <Button primary label="Add" size='medium'/>
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