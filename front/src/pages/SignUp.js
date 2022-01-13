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
        <Box background={"gray"} fill align="center" justify="center" width="medium">
            <Box width="medium">
                <Heading level={2}>
                    SignUp
                </Heading>
                
                    <Form>
                        <FormField name='text' label='Username' >
                            <TextInput id="username" placeholder='Username' required></TextInput>
                        </FormField>
                        <FormField name='text' label='Username' >
                            <TextInput id="username" placeholder='Username' required></TextInput>
                        </FormField>
                        <FormField name='text' label='Username' >
                            <TextInput id="username" placeholder='Username' required></TextInput>
                        </FormField>
                        <FormField name='text' label='Username' >
                            <TextInput id="username" placeholder='Username' required></TextInput>
                        </FormField>

                        <Box align='start'  margin={{top:'15px'}}>
                            <Box direction='row' gap='small'>
                                <FormField name="subscribe">
                                    <Text id="chooseSport">Elige deportes (máximo 3)</Text>
                                    <CheckBoxGroup name="sport" margin={{top:'10px'}}  options={["Baloncesto","Fútbol","Runner"]} direction='column'/> 
                                </FormField>
                            </Box>
                        </Box>
                        <Box>
                            <Box direction="row" align='center' >
                                <Text size="medium" >Add Image</Text>
                                <Box pad={{left:'large'}} >
                                    <Button primary label="Add" size='medium'></Button>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Form>
            </Box>
                

        </Box>

       

    
    );   
}