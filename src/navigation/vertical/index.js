// ** Icon imports
import TranslateIcon from '@mui/icons-material/Translate'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

const navigation = () => {
  return [
    {
      title: 'Generate Review',
      icon: RateReviewOutlinedIcon,
      path: '/review'
    },
    {
      title: 'Text Summarizer',
      icon: TextSnippetOutlinedIcon,
      path: '/text-summarizer'
    },
    {
      title: 'Grammar Checker',
      icon: ContentPasteSearchIcon,
      path: '/grammar-checker'
    },

    {
      title: 'Vocabulary',
      icon: FormatColorTextIcon,
      path: '/vocabulary'
    },
    {
      icon: TranslateIcon,
      title: 'Translator',
      path: '/translator'
    }
  ]
}

export default navigation
