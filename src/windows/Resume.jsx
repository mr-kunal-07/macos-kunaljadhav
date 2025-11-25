import MacControl from '#components/macControl'
import windowWrapper from '#hoc/windowWrapper'
import { ArrowLeft, ArrowRight, Download, ZoomIn, ZoomOut } from 'lucide-react'
import React, { useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;
;



import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

const Resume = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [scale, setScale] = useState(1.4)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const nextPage = () => {
        if (pageNumber < numPages) setPageNumber(pageNumber + 1)
    }

    const prevPage = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1)
    }

    return (
        <>
            <div id="window-header">
                <MacControl target="resume" />
                <h2>Resume.pdf</h2>

                <a
                    href="/resume.pdf"
                    download
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-center gap-4 py-3 bg-[#f5f5f5]">

                {/* Pagination */}
                <button onClick={prevPage} disabled={pageNumber === 1} className="p-2 border rounded disabled:opacity-40">
                    <ArrowLeft size={10} />
                </button>

                <span className="text-[12px] font-medium">
                    Page {pageNumber} / {numPages ?? "—"}
                </span>

                <button onClick={nextPage} disabled={pageNumber === numPages} className="p-2 border rounded disabled:opacity-40">
                    <ArrowRight size={10} />
                </button>

                {/* Zoom */}
                <button onClick={() => setScale(scale + 0.1)} className="p-2 border rounded">
                    <ZoomIn size={10} />
                </button>

                <button onClick={() => setScale(scale - 0.1)} disabled={scale <= 0.3} className="p-2 border rounded disabled:opacity-40">
                    <ZoomOut size={10} />
                </button>
            </div>

            {/* PDF Viewer */}
            <div className="pdf-container">
                <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        className="shadow-xl rounded-lg"
                    />
                </Document>
            </div>
        </>
    )
}

const ResumeWindow = windowWrapper(Resume, 'resume')

export default ResumeWindow
