import { BiCloudUpload } from "react-icons/bi";

const FileUpload = () => {
  return (
    <div className="flex flex-wrap p-5">
      <div className="w-full p-4">
        <div className=" border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:bg-gray-100 cursor-pointer">
          <div className="flex justify-center">
            <BiCloudUpload className="h-8 w-8" />
          </div>
          <p className="text-gray-400">
            <span className="text-purple-800 font-bold">Click to upload</span>{" "}
            or drag and drop
          </p>
          <p className="text-sm text-gray-400">
            SVG, PNG, JPG, GF (max 800x400px)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
