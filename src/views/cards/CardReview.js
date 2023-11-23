// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardReview = () => {
  return (
    <Link href='/review'>
      <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#CA3C66', cursor: 'pointer' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            Generate Review
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          Our Review Generator produces comprehensive reviews that include components such as an abstract, introduction, keywords, existing works, and a conclusion.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardReview
