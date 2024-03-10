import { QuartzComponent, QuartzComponentProps } from "./types";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const SaveToPDFComponent: QuartzComponent = (props: QuartzComponentProps) => {
  const downloadPDF = async () => {
    const element = document.getElementById('quartz-root');
    if (element) {
      const canvas = await html2canvas(element);
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imageData, 'PNG', 0, 0);
      pdf.save('download.pdf');
    }
  };

  return (
    <button onClick={downloadPDF}>
      Save as PDF
    </button>
  );
};
