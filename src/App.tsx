import FileUpload from "./components/FileUpload";
import "./App.css";
import UploadedFile from "./components/UploadedFile";

function App() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <FileUpload />
        <FileUpload />
        <FileUpload />
        <FileUpload />
        <FileUpload />
        <FileUpload />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <UploadedFile
          name={"Tech Design requirements.pdf"}
          size={"200 KB"}
          percentage={100}
        />
        <UploadedFile
          name={"Tech Design requirements.pdf"}
          size={"200 KB"}
          percentage={100}
        />
        <UploadedFile
          name={"Tech Design requirements.pdf"}
          size={"200 KB"}
          percentage={80}
        />
        <UploadedFile
          name={"Dashboard recording.pdf"}
          size={"200 KB"}
          percentage={60}
        />
        <UploadedFile
          name={"Dashboard recording.pdf"}
          size={"200 KB"}
          percentage={70}
        />
        <UploadedFile
          name={"DashBoard Prototype.pdf"}
          size={"200 KB"}
          percentage={100}
        />
        <UploadedFile
          name={"DasBoard Prototype.pdf"}
          size={"200 KB"}
          percentage={20}
        />
        <UploadedFile
          name={"DasBoard Prototype.pdf"}
          size={"200 KB"}
          percentage={10}
        />
        <UploadedFile
          name={"Tech Design requirements.pdf"}
          size={"200 KB"}
          percentage={70}
        />
      </div>
    </div>
  );
}

export default App;
