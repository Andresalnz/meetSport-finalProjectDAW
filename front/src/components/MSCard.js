import { useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Image,
  Paragraph,
} from 'grommet';
import useListRequest  from '../hooks/useListRequest'

import { FormDown, FormUp, ShareOption } from 'grommet-icons';
import sendRequest from  '../hooks/useCreateRequest';

export default function MSCard({title}) {

  const list = useListRequest()
  const [open, setOpen] = useState(false);

  const ExpandButton = (props) => {
    
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...props}
      />
    );
  };


  return <>
    <Card animation={{type: 'fadeIn', duration: 1000}} pad="large" elevation="small" >
      <CardBody height="small">
        <Image
          fit="cover"
          src="//v2.grommet.io/assets/IMG_4245.jpg"
          a11yTitle="bridge"
        />
      </CardBody>
      <Box pad={{ horizontal: 'medium' }} responsive={false}>
        <Heading level="3" margin={{ vertical: 'medium' }} >
        {
          title.map(i=>i)
        }
        </Heading>
        <Paragraph margin={{ top: 'none' }}>
          A structure carrying a road, path, railroad, or canal across a
          river, ravine, road, railroad, or other obstacle.
        </Paragraph>
      </Box>
      <CardFooter>
        <Box direction="row" align="center" gap="small">
          2/10
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
          <Anchor
            href="https://www.collinsdictionary.com/us/dictionary/english/bridge"
            label="Learn More"
          />
        </Box>
        <ExpandButton onClick={() => setOpen(!open)} />
      </CardFooter>
      <Collapsible open={open}>
        <Paragraph margin="medium" color="dark-3">
          The greatest bridge builders of antiquity were the ancient Romans.
          The Romans built arch bridges and aqueducts that could stand in
          conditions that would damage or destroy earlier designs. Some
          stand today.
        </Paragraph>
      </Collapsible>
    </Card>
  </>
}