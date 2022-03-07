
import  {Box, Heading, Text} from 'grommet'
import useUser from '../hooks/useUser'

export default function MSInformationUser(props) {

  const userInfo = useUser()

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
      <Box direction='column' margin={{vertical:'small'}}>
        <Text margin={{right:'small'}}>Nombre de usuario:</Text>
        <Text margin='none' weight='bold'> {userInfo.username} </Text>
      </Box>
      <Box direction='column'>
        <Text margin={{right:'small'}}>Email del usuario:</Text>
        <Text margin='none' weight='bold'> {userInfo.mail} </Text>
      </Box>
      {/* <Box direction='column' margin={{vertical:'small'}}>
        <Text margin={{right:'small'}} >Soy de:</Text>
        <Text margin='none' weight='bold'> {userInfo.location.name} </Text>
      </Box> */}
      {/* <Box direction='column'>
        <Text margin={{right:'small'}}>Mi deporte favorito es:</Text>
        <Text margin='none' weight='bold'> {userInfo.sports.name} </Text>
      </Box> */}
    </Box>
  )
}