import {Text,Box, Form, FormField, Heading, TextInput, Button } from "grommet";
import { Add, Google } from "grommet-icons";
import { Link } from "react-router-dom"
import {useNavigate,useLocation} from 'react'
import useSignIn from '../hooks/useSigIn'

export default function Login(props) {
    const [signIn,signInErrorState] = useSignIn() 
    
    
    return (
        <Box fill align="center" justify="center" width="medium">
           
            {
                signInErrorState.error ?  <Text>Error</Text> : false
            }
            <Box width="medium">
                <Heading>
                    Sign In
                </Heading>
                <Form onSubmit={({value}) => signIn(value)}>
                    <FormField name="username" label="Nombre de usuario o email" htmlFor="username" required>
                        <TextInput id="username" name="username" placeholder="Nombre de usuario o email"> 
                        </TextInput>
                    </FormField>
                    <FormField name="password" label="Contraseña" htmlFor="password" required>
                        <TextInput id="password" name="password" placeholder="Contraseña">
                        </TextInput>
                    </FormField>
                
                    <Box align="center" pad="medium">
                        <Button primary 
                            type="submit"
                            label="Sig In" 
                            fill="horizontal" 
                            size="large" 
                            borderWidth ="2000px"       
                        />
                    </Box>
                </Form>
            </Box>
            <hr width="35%"/>
            <Box direction="row" align="center">
                <Button icon={<Google/>} size="large"></Button>
                <Link to="/">Inicia sesión con Google</Link>
            </Box>
        </Box>
    )
}