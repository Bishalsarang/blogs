import PDFPreview from '@/components/PDFPreview'
import ResumeLayout from '@/layouts/ResumeLayout'

const pdfUrl = './Bishal Sarangkoti Resume.pdf'

const ResumePage = () => (
  <ResumeLayout>
    <PDFPreview pdfUrl={pdfUrl} />
    <a href={pdfUrl} download>
      Download PDF
    </a>
  </ResumeLayout>
)

export default ResumePage
