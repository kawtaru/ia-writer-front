// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const FormLayoutsResult = ({result}) => {
  return (
    <Card>
      <CardHeader title='Result' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            {result}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsResult
