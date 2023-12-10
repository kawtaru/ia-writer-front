// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { saveAs } from 'file-saver' // This library is used to trigger the download
import htmlToDocx from 'html-docx-js/dist/html-docx'

const FormLayoutsResult = ({
  title,
  abstract,
  Keywords,
  introduction,
  existingWorks,
  comparaison,
  conclusion,
  references
}) => {
 const downloadDocument = () => {
     const content = `
      <div>
        ${title && `<h3>Title</h3><p>${title}</p>`}
        ${abstract && `<h3>Abstract</h3><p>${abstract}</p>`}
        ${Keywords && `<p>${Keywords}</p>`}
        ${introduction && `<h3>Introduction</h3><p>${introduction}</p>`}
        ${existingWorks && `<h3>Existing Works</h3><p>${existingWorks}</p>`}
        ${comparaison && `<h3>Comparison with other works</h3><p>${comparaison}</p>`}
        ${conclusion && `<h3>Conclusion</h3><p>${conclusion}</p>`}
        ${references && `<h3>References</h3><p>${references.replace(/\n/g, '<br/>')}</p>`}
      </div>
    `

    const converted = htmlToDocx.asBlob(content, { orientation: 'portrait' })

    const blob = new Blob([converted], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })

    saveAs(blob, 'Review.docx')
  }


  return (
    <>
      <Card>
        <CardHeader title='Review' titleTypographyProps={{ variant: 'h6' }} />

        {title && (
          <>
            <CardHeader title='Title' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  {title}
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}
        <br />

        {abstract && (
          <>
            <CardHeader title='Abstract' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  {abstract}
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}

        {Keywords && (
          <>
            
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                <span style={{fontSize: 15,
    fontSize: 15,
    fontWeight: 500
    }}>Keywords: </span>{Keywords}
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}
        <br />

        {introduction && (
          <>
            <CardHeader title='Introduction' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  {introduction}
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}
        <br />

        {existingWorks && (
          <>
            <CardHeader title='Existing Works' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  {existingWorks}
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}
        <br />

        {comparaison && (
          <>
            <CardHeader title='Comparaison with an other works' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                <div 
            dangerouslySetInnerHTML={{__html: comparaison }}/>
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}
        <br />

        {conclusion && (
          <>
            <CardHeader title='Conclusion' titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  {conclusion}
                </Grid>
              </Grid>
            </CardContent>
          </>
        )}
        <br />
        {references && (
  <>
    <CardHeader title='References' titleTypographyProps={{ variant: 'h6' }} />
    <CardContent>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: references.replace(/\n/g, '<br/>') }} />
        </Grid>
      </Grid>
    </CardContent>
  </>
)}


      </Card>
      <br />
      <Grid item xs={12}>
        <Button onClick={() => downloadDocument()} variant='contained' size='large'>
          Download as Word
        </Button>
      </Grid>
    </>
  )
}

export default FormLayoutsResult
