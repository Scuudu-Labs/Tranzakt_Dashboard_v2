import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';
import IconWrap from '../ui/svgWrapper';
import { UploadIcon } from '../../assets';
import ButtonLoader from '../button/buttonLoader';
type IProps = {
  label: string;
  loading?: boolean;
  err?: string;
  url?: string;
  onDrop:
    | (<T extends File>(
        acceptedFiles: T[],
        fileRejections: FileRejection[],
        event: DropEvent
      ) => void)
    | undefined;
};

const UploadFile = ({ label, onDrop, url, err, loading }: IProps) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="flex w-full mb-4  mx-auto flex-col   gap-y-2">
      <label className="text-[14px] font-montserrat font-[500]">{label}</label>

      <div
        className="flex w-full h-[158px] flex-col items-center justify-center rounded-[8px] border border-[#A1A1A1] "
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {url ? (
          <div className=" w-full h-[158px]">
            {loading ? (
              <ButtonLoader />
            ) : (
              <img
                src={url || ' '}
                alt="campaign_image"
                className="w-full h-full object-cover rounded-[8px]"
              />
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <IconWrap src={UploadIcon} style="w-[48px] h-[44px]" />
            <span className="font-montserrat text-[14px] py-2 text-[#A1A1A1]">
              The image size must be 350 X 158px
            </span>
          </div>
        )}
      </div>
      <span className="text-red-400">{err && err}</span>
    </div>
  );
};

export default UploadFile;
