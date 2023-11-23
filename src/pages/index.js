// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CardReview from 'src/views/cards/CardReview'
import CardTextSummarizer from 'src/views/cards/CardTextSummarizer'
import CardGrammerChecker from 'src/views/cards/CardGrammerChecker'
import CardVocabulary from 'src/views/cards/CardVocabulary'
import CardTranslator from 'src/views/cards/CardTranslator'

const CardBasic = () => {

  return (

    <Grid container spacing={6}>
      <Grid item xs={12} sm={6}>
        <CardReview />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardTextSummarizer />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardGrammerChecker />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardVocabulary />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardTranslator />
      </Grid>
    </Grid>
  )
}

export default CardBasic
