import { 
  Layer, 
  Box, 
  Heading, 
  Text, 
  Button, 
  FormField, 
  TextArea, 
  TextInput, 
  MaskedInput,
  Form,
  RadioButtonGroup,
} from 'grommet';
import { useState } from 'react';
import { Link} from "react-router-dom";
import useCreateRequest from '../hooks/useCreateRequest';
import useListSports  from '../hooks/useListSports'
import useListLocations from '../hooks/useListLocations';

export default function CreateRequest() {
  
  const sendRequest = useCreateRequest();
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const listSports = useListSports()
  const listLocations = useListLocations()

  const sports =listSports.map((sport)=>{ return sport.name  })
  const locations=listLocations.map((location)=>{ return location.name  })
  const daysInMonth = month => new Date(2019, month, 0).getDate();

  return (
    <Layer
      id="hello world"
      position="center"
    >
      <Box pad="medium" gap="small" width="large" height="100%" justify="between">
        <Form
          validate="blur"
          onReset={event => console.log(event)}
          onSubmit={({ value }) => sendRequest(value)}
        >
          <Heading level={3} margin={{ top: '0', bottom: '30px'}}>
            Create a request
          </Heading>
          <FormField label="Title" name="title" htmlFor="requestTitle" required>
            <TextInput id="requestTitle" name="title" placeholder="Basket session with friends..."  />
          </FormField>
          <FormField label="Description of activity" name="description" htmlFor="select" required>
            <TextArea id="requestDescription" name="description" placeholder="Nos hacen falta 3 tios más para un partido..." />
          </FormField>
          <FormField label="Location" name="location" htmlFor="select" required>
            <TextInput id="requestLocation" name="location" placeholder="Alberti" />
          </FormField>
          <RadioButtonGroup margin={{bottom:'small'}} direction='row' name="sportId" options={sports}></RadioButtonGroup> 
          <RadioButtonGroup direction='row' name="cityId" options={locations}></RadioButtonGroup>        
            <Box gap="small" width="medium" direction="row" margin={{vertical:'small'}}>
              <FormField justify="end" name="date" htmlFor="requestDate" required> 
                <MaskedInput
                  name="date"
                  id="requestDate"
                  mask={[
                    {
                      length: [1, 2],
                      options: Array.from({ length: 12 }, (v, k) => k + 1),
                      regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                      placeholder: 'mm',
                    },
                    { fixed: '/' },
                    {
                      length: [1, 2],
                      options: Array.from(
                        {
                          length: daysInMonth(parseInt(dateValue.split('/')[0], 10)),
                        },                  (v, k) => k + 1,
                    ),
                      regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
                      placeholder: 'dd',
                    },
                    
                  ]}
                  value={dateValue}
                  onChange={event => setDateValue(event.target.value)}
                />
              </FormField>
                <FormField justify="end" name="hour" htmlFor="requestHour" required>
                  <MaskedInput
                    name="hour"
                    id="requestHour"
                    mask={[
                      {
                        length: [1, 2],
                        options: [
                          '1',
                          '2',
                          '3',
                          '4',
                          '5',
                          '6',
                          '7',
                          '8',
                          '9',
                          '10',
                          '11',
                          '12',
                        ],
                        regexp: /^1[1-2]$|^[0-9]$/,
                        placeholder: 'hh',
                      },
                      { fixed: ':' },
                      {
                        length: 2,
                        options: ['00', '15', '30', '45'],
                        regexp: /^[0-5][0-9]$|^[0-9]$/,
                        placeholder: 'mm',
                      },
                      { fixed: ' ' },
                      {
                        length: 2,
                        options: ['am', 'pm'],
                        regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                        placeholder: 'ap',
                      },
                    ]}
                    value={timeValue}
                    onChange={event => setTimeValue(event.target.value)}
                    required
                  />
                </FormField>
            </Box>
            <Box gap="small" width="medium" direction="row" margin={{vertical:'small'}}>
              <FormField label="Participants" name="participants" htmlFor="requestParticipants" width="fit-content">
                <MaskedInput
                  id="requestParticipants"
                  name="participants"
                  placeholder="11"
                  length="2"
                  type="number"
                  required
                />
              </FormField>
              <FormField label="Price" name="price" htmlFor="requestPrice" width="fit-content">
                <MaskedInput
                  id="requestPrice"
                  name="price"
                  placeholder="1.50"
                  length="3"
                  type="string"
                  required
                />
              </FormField>
            </Box>
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          alignSelf="end"
          pad={{ top: 'medium', bottom: 'small' }}
        >
          <Link to="/">
            <Button  label="Cancel"  color="button" />
          </Link>
          <Button
            type="submit"
            label={
              <Text color="white">
                <strong>Send request</strong>
              </Text>
            }
            primary
            color="button"
          />
        </Box>
        </Form>
      </Box>
    </Layer>
  );
}