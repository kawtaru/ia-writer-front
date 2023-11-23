// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const Translator = () => {
  return (
    <Link href='/translator'>
      <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#d74f2f', cursor: 'pointer' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            Translator
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
            Our Translator converts text between languages, facilitating seamless communication and bridging linguistic
            gaps.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default Translator
