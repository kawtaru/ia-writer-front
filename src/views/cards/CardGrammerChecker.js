// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardGrammerChecker = () => {
  return (
    <Link href='/grammar-checker'>
      <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#e28f38', cursor: 'pointer' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            Grammar Checker
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
            Our Grammar Checker ensures impeccable writing by identifying and correcting grammatical errors, enhancing
            the quality of your text.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardGrammerChecker
