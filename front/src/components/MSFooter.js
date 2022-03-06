import {Box, Text, Footer} from 'grommet'

export default function MSFooter () {
  return (
    <Box  elevation="large" >
   <Footer background="light-4" justify="center" pad="small">
      <Text textAlign="center" size="small">
        © 2022 Copyright MeetSport
      </Text>
    </Footer>
  </Box>
  )
}