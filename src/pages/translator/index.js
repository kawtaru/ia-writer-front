import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert  elevation={6} ref={ref} variant="filled" {...props} />;
});

import axios from 'axios'
// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsTranslator from 'src/views/form-layouts/FormLayoutsTranslator'
import Result from './Result'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = ({}) => {

  const [error, setError] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [openError, setOpenError] = useState(false);

  const checkText = (text) => {
    const regex = `\n  Translate in English in the following text: ${text} \n`
    setLoading(true)
    axios.post('http://localhost:8000/check', {text: regex}).then(res => {
      
      setResult(res.data.Text)
      setLoading(false)
    }).catch(error => {
      console.log("error", error)
      setError(error.message)
      setOpenError(true)
      setLoading(false)
    })
  }

  
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
         <FormLayoutsTranslator loading={loading} onCheck={(text) => checkText(text)} />
        </Grid>
        <Grid item xs={12} md={6}>
        <Snackbar open={openError} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}  autoHideDuration={3000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
          <Result result={result} />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
