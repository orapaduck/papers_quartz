import { QuartzComponentConstructor } from "./types"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default (() => {
  function downloadPDF() {
    const saveAsPdf = async () => {
      const canvas = await html2canvas(document.body);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      var imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
      var pageHeight = imgWidth * 1.414;  // 출력 페이지 세로 길이 계산 A4 기준
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('download.pdf');
    };

    return (
      <button onClick={saveAsPdf}>Save as PDF</button>
    );
  }

  return downloadPDF;
}) satisfies QuartzComponentConstructor;
