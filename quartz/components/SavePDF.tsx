import { QuartzComponent, QuartzComponentProps } from "./types";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const SaveToPDFComponent: QuartzComponent = (props: QuartzComponentProps) => {
  const downloadPDF = async () => {
    const element = document.getElementById('quartz-root');
    if (element) {
      const canvas = await html2canvas(element);
      const imageData = canvas.toDataURL('image/png');
      var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
	    var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
	    var imgHeight = canvas.height * imgWidth / canvas.width;
	    var heightLeft = imgHeight;
      const pdf = new jsPDF();
      pdf.addImage(imageData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('download.pdf');
    }
  };

  return (
    <button onClick={downloadPDF}>
      Save as PDF
    </button>
  );
};
