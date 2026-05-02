import cvFile from "../assets/agyemangdev_cv.pdf";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = cvFile;
  link.download = "AgyemangDev_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleDownloadCV;