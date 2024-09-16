import { FaFilePdf } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const UploadedFile = ({ name, size, percentage }: any) => {
  return (
    <div className="grid grid-cols-[1fr_6fr_0.5fr]  border-2 p-3 hover:bg-gray-100">
      <div>
        <FaFilePdf className="text-red-600 h-8 w-8" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-left">{name}</div>
        <div className="text-slate-600 text-left">{size}</div>
        <div className="flex items-center gap-2">
          <div className="w-full flex ite bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-800 h-full text-center text-xs font-medium text-white rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="text-slate-600 font-semibold">{percentage}%</div>
        </div>
      </div>
      <div className="w-5 justify-end">
        {percentage == 100 ? (
          <TiTick className="w-full h-5 bg-purple-800 text-white rounded-md font-thin" />
        ) : (
          <ImBin />
        )}
      </div>
    </div>
  );
};

export default UploadedFile;
