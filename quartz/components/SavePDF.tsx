import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import style from "./styles/pdfExporter.scss";
import { html2pdf } from 'html2pdf.js';
interface PdfExporterOptions {
  fileName: string;
}
export default ((opts?: PdfExporterOptions) => {
  function PdfExporter({ displayClass, cfg }: QuartzComponentProps) {
    const exportPDF = () => {
      const element = document.body; // or any specific element you want to export
      const options = {
        margin:       10,
        filename:     opts?.fileName || 'document.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().from(element).set(options).save();
    }

    return (
      <div class={`${displayClass ?? ""}`}>
        <button onClick={exportPDF} class="pdf-export-button">Export as PDF</button>
      </div>
    )
  }

  PdfExporter.css = style;
  return PdfExporter;
}) satisfies QuartzComponentConstructor;
