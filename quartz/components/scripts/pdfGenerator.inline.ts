import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const saveCurrentPageAsPDF = async () => {
  const canvas = await html2canvas(document.body);
  const imageData = canvas.toDataURL('image/png');
  const pdf = new jsPDF();
  pdf.addImage(imageData, 'PNG', 0, 0);
  pdf.save('download.pdf');
};

export default { saveCurrentPageAsPDF };
