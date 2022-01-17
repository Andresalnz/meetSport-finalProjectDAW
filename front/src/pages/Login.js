import { Box, Form, FormField, Heading, TextInput, Button } from "grommet";
import { Add, Google } from "grommet-icons";
import { Link } from "react-router-dom"

export default function Login(props) {


    return (

        <Box fill align="center" justify="center" width="medium">
            <Box width="medium">
                <Heading>
                    Sign In
                </Heading>
                <Form>
                    <FormField name="usernmeMail" label="Nombre de usuario o email" required>
                        <TextInput id="username" placeholder="Nombre de usuario o email"></TextInput>
                    </FormField>
                    <FormField name="password" label="Contraseña" required>
                        <TextInput id="password" placeholder="Contraseña"></TextInput>
                    </FormField>
                </Form>
                <Box align="center" pad="medium">
                    <Button primary label="Sig In" fill="horizontal" size="large" borderWidth ="2000px"></Button>
                </Box>
            </Box>
            <hr width="35%"/>
            <Box direction="row" align="center">
                <Button icon={<Google/>} size="large"></Button>
                <Link to="/">Inicia sesión con Google</Link>
            </Box>
        </Box>
    )
}