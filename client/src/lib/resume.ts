// Generate and download resume as PDF
export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/api/resume/download';
  link.setAttribute('download', 'attached_assets/Ebukaresume.docx');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
