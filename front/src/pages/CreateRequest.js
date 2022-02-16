import { 
  Layer, 
  Box, 
  Heading, 
  Text, 
  Button, 
  FormField, 
  TextArea, 
  TextInput, 
  DateInput,
  MaskedInput,
  Form,
  RadioButtonGroup,
} from 'grommet';
import useCreateRequest from '../hooks/useCreateRequest';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function CreateRequest() {
  const sendRequest = useCreateRequest();
  const [timeValue, setTimeValue] = useState('');
  const [dateValue, setDateValue] = useState('');
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
          onSubmit={({ value }) => sendRequest(value)}>
          <Heading level={3} margin={{ top: '0', bottom: '30px'}}>
            Create a request
          </Heading>
          <FormField label="Title" name="requestTitle" htmlFor="requestTitle" required>
            <TextInput id="requestTitle" name="requestTitle" placeholder="Basket session with friends..."  />
          </FormField>
          <FormField label="Description of activity" name="requestDescription" htmlFor="select" required>
            <TextArea id="requestDescription" name="requestDescription" placeholder="Nos hacen falta 3 tios más para un parti..." />
          </FormField>
          <FormField label="Location" name="requestLocation" htmlFor="select" required>
            <TextInput id="requestLocation" name="requestLocation" placeholder="Campo hondo" />
          </FormField>
          <RadioButtonGroup direction='row' name="cities" options={["Cádiz","Sevilla","Malaga","Almeria","Córdoba","Huelva","Jaén","Granada"]}></RadioButtonGroup>        
            <Box gap="small" width="medium" direction="row" margin={{vertical:'small'}}>
            <FormField justify="end" name="requestDate" htmlFor="requestDate" required> 
                <MaskedInput
                  name="requestDate"
                  id="requestDate"
                  mask={[
                    {
                      length: [1, 2],
                      options: Array.from({ length: 12 }, (v, k) => k + 1),
                      regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                      placeholder: 'dd',
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
                      placeholder: 'mm',
                    },
                    
                  ]}
                  value={dateValue}
                  onChange={event => setDateValue(event.target.value)}
                />
              </FormField>
              <FormField justify="end" name="requestHour" htmlFor="requestHour" required>
                <MaskedInput
                  name="requestHour"
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
          <FormField label="Participants" name="requestParticipants" htmlFor="requestParticipants" width="fit-content">
            <MaskedInput
              id="requestParticipants"
              name="requestParticipants"
              placeholder="11"
              length="2"
              type="number"
              required
            />
          </FormField>
        
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
            <Button secondary label="Cancel" color="dark-3" />
          </Link>
          <Button
            type="submit"
            label={
              <Text color="white">
                <strong>Send request</strong>
              </Text>
            }
            primary
          />
        </Box>
        </Form>
      </Box>
     
    </Layer>
   
  );
}