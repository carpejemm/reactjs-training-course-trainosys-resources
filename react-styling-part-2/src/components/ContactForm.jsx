import { Button, TextField, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Email" type="email" />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  )
}

export default ContactForm
