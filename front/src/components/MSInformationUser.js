
import  {Box, Heading, Text} from 'grommet'

export default function MSInformationUSer(props) {

  return(
<Box
  direction="column"
  border={{ color: 'brand', size: 'small' }}
  pad="large"
>
<Heading  alignSelf='center' margin={{top:'small'}} level="2">
  Informacion de usuario
</Heading>
<Text margin='none' weight='bold'>Nombre de usuario: {props.name} </Text>
<Text margin='none' weight='bold'>En {props.location} </Text>

</Box>
  )
}