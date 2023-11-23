// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardVocabulary = () => {
  return (
    <Link href='/vocabulary'>
      <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#6aa84f', cursor: 'pointer' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            Vocabulary
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
            Our Vocabulary expands word knowledge, suggesting synonyms and helping users diversify their language for
            richer communication.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardVocabulary
