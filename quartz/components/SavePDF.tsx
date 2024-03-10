import { QuartzComponentConstructor } from "./types";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default (() => {
  const saveAsPdf = async () => {
    const canvas = await html2canvas(document.body);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 190; // A4 width in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const heightLeft = imgHeight;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('download.pdf');
  };

  function downloadPDF() {
    return (
      <button onClick={saveAsPdf}>Save as PDF</button>
    );
  }

  return downloadPDF;
}) as QuartzComponentConstructor;
