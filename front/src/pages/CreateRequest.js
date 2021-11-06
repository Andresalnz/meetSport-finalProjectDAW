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
  Keyboard, 
  MaskedInput,
  Form
} from 'grommet';
import { useState } from 'react';

export default function CreateRequest() {
  const [value, setValue] = useState({ name: 'a', email: 'b' });
  const [ requestTitle, setRequestTitle ] = useState('');
  const [ requestDate, setRequestDate ] = useState('');
  const [time, setTime] = useState('');
  const onChangeDate = (event) => {
    console.log(event);
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setRequestDate(nextValue);
  };
  return (
    <Layer
      id="hello world"
      position="center"
    >
      <Box pad="medium" gap="small" width="large" height="100%" justify="between">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onSubmit={({ value: nextValue }) => console.log(nextValue)}>
          <Heading level={3} margin={{ top: '0', bottom: '10px'}}>
            Create a request
          </Heading>
          <FormField label="Title" htmlFor="select" error="está mal pisha" required>
            <TextInput placeholder="Basket session with friends..."  />
          </FormField>
          <FormField label="Description of activity" htmlFor="select" required>
            <TextArea id="text-area" placeholder="Nos hacen falta 3 tios más para un parti..." />
          </FormField>
          <FormField label="Location" htmlFor="select" required>
            <TextInput  placeholder="Campo hondo, Cádiz" />
          </FormField>
          <FormField label="Date & time" htmlFor="select" required>
            <Box gap="small" width="large" direction="row">
              <DateInput format="dd/mm/yyyy" value={requestDate} onChange={onChangeDate} />
              
              <MaskedInput
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
                value={time}
                name="maskedInput"
                onChange={event => setTime(event.target.value)}
              />
           
            </Box>
          </FormField>
          <FormField label="Participants" htmlFor="select" width="fit-content">
            <TextInput value={requestTitle} onChange={setRequestTitle}   placeholder="5" required />
          </FormField>
        </Form>
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          alignSelf="end"
          pad={{ top: 'medium', bottom: 'small' }}
        >
          <Button secondary label="Cancel" color="dark-3" />
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
      </Box>
    </Layer>
  );
}