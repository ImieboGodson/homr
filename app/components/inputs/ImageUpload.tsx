"use client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

const uploadPreset = "elsszwzg";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value?: string;
  isCoverPhoto?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  isCoverPhoto,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      uploadPreset={uploadPreset}
      onUpload={handleUpload}
      options={{
        maxFiles: 1,
        sources: ["local"],
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className={`w-full h-full flex flex-row justify-center items-center border border-dashed cursor-pointer`}
          >
            {value && (
              <div className="absolute inset-0 bg-transparent z-20">
                <Image
                  src={value}
                  alt={isCoverPhoto ? "cover photo" : "uploaded image"}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-2 items-center">
              <TbPhotoPlus
                size={40}
                className={`${isCoverPhoto ? "" : "text-neutral-400"}`}
              />
              {isCoverPhoto && (
                <div className="text-base font-semibold underline cursor-pointer">
                  Add a cover photo
                </div>
              )}
            </div>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
