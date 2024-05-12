'use client'
import { useState, useEffect, useRef } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
import 'react-pdf/dist/esm/Page/TextLayer.css'
const PDFPreview = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0) // Default scale
  const containerRef = useRef<HTMLDivElement>(null)

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages)
    setNumPages(numPages)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  function fitToPage() {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      setScale(containerWidth / 700) // Assuming the PDF's default width is 700px
    }
  }

  useEffect(() => {
    fitToPage()
    window.addEventListener('resize', fitToPage)
    return () => window.removeEventListener('resize', fitToPage)
  }, [])

  return (
    <div ref={containerRef} style={{ overflow: 'auto', maxHeight: '700px' }}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode={'canvas'}
        loading={<div>Loading PDF...</div>}
      >
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
      <div></div>
    </div>
  )
}

export default PDFPreview
