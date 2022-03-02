
import  {Box, Heading, Text} from 'grommet'
import useUser from '../hooks/useUser'

export default function MSInformationUser(props) {

  const use = useUser()

  return(
    <Box
      direction="column"
      responsive="true"
      border={{ color: 'white', size: 'small' }}
      pad="large"
    >
      <Heading  alignSelf='center' margin={{top:'small'}} level="2">
        Informacion de usuario
      </Heading>
      <Box direction='row' margin={{vertical:'small'}}>
        <Text margin={{right:'small'}}>Nombre de usuario:</Text>
        <Text margin='none' weight='bold'> {use.username} </Text>
      </Box>
      <Box direction='row'>
        <Text margin={{right:'small'}}>Email del usuario:</Text>
        <Text margin='none' weight='bold'> {use.mail} </Text>
      </Box>
    </Box>
  )
}