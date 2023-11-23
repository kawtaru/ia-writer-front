import React from 'react'
import { render, Document, Text } from 'redocx'

class App extends React.Component {
  render() {
    return (
      <Document>
        <Text>Hello Ayah</Text>
      </Document>
    )
  }
}

render(<App />, `C:\Users\aya\Desktop\text-checker\public\review.docx`)