// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from 'next/link'

const CardTextSummarizer = () => {
  return (
    <Link href='/text-summarizer'>
      <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: '#3D85C6', cursor: 'pointer' }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
          <Typography
            variant='h6'
            sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
          >
            Text Summarizer
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
            Our Text Summarized condenses lengthy text into concise summaries, providing a quick and efficient way to
            grasp essential information.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardTextSummarizer
