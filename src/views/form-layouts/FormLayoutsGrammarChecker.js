// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useState } from 'react'

const FormLayoutsGrammarChecker = ({onCheck, loading}) => {

  const [value, setValue] = useState('')
  return (
    <Card>
      <CardHeader title='Write your text and let us check your grammar!' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={12}
                label='Text'
                placeholder='Type your text'
                value={value}
                onChange={(event) => setValue(event.target.value)}
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' onClick={() => onCheck(value)} variant='contained' size='large'>
                Submit
              </Button>
              {loading ? ' loading ...' : ''}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsGrammarChecker
