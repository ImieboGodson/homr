"use client";

import useGalleryModal from "@/app/hooks/useGalleryModal";
import { useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import HeartButton from "../HeartButton";
import { SafeUser } from "@/app/types";
import Image from "next/image";

interface SliderProps {
  listingId: string;
  currentUser?: SafeUser | null;
  photos: string[];
  isOpen: boolean;
  onClose?: () => void;
  isDisable?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  photos,
  listingId,
  currentUser,
  isOpen,
  onClose,
  isDisable,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [imageArray, setImageArray] = useState(photos);
  const [currentIndex, setCurrentIndex] = useState(1);

  const gallaryModal = useGalleryModal();

  useEffect(() => {
    setTimeout(() => {
      setShowModal(isOpen);
    }, 300);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (isDisable) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      gallaryModal.onClose();
    }, 300);
  }, [isDisable, gallaryModal]);

  const onBack = () => {
    if (currentIndex === 1) {
      return setCurrentIndex(imageArray.length);
    }

    setCurrentIndex((value) => value - 1);
  };

  const onNext = () => {
    if (currentIndex === imageArray.length) {
      return setCurrentIndex(1);
    }

    setCurrentIndex((value) => value + 1);
  };

  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed inset-0 overflow-hidden flex justify-center items-center bg-neutral-800/70 z-50">
      <div className="w-[100vw] h-[100vh] my-6">
        <div
          className={`w-full h-full  translate duration-300 ${
            showModal ? "translate-y-0" : "translate-y-[120%]"
          } ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full h-full overflow-hidden flex flex-col bg-black text-white translate">
            <div className="relative w-full md:h-[20vh] p-4 flex items-center justify-center text-lg font-bold">
              <div
                onClick={handleClose}
                className="absolute left-6 p-2 rounded-full hover:bg-neutral-100/40 cursor-pointer transition"
              >
                <IoCloseOutline size={22} />
              </div>
              <div className="text-base font-semibold">
                {currentIndex} / {imageArray.length}
              </div>
              <div className="absolute right-6 p-2 rounded-full hover:bg-neutral-100/40 cursor-pointer transition">
                <HeartButton listingId={listingId} currentUser={currentUser} />
              </div>
            </div>
            <div className="w-full h-full flex flex-row overflow-hidden bg-yellow-500">
              <div className="w-0 h-full sm:w-[10vw] bg-black sm:flex sm:flex-col items-center justify-center">
                {currentIndex !== 1 && (
                  <div
                    onClick={onBack}
                    className="absolute bottom-20 left-24 sm:static p-4 rounded-full border border-white text-white cursor-pointer"
                  >
                    <FaChevronLeft size={12} />
                  </div>
                )}
              </div>
              <div className="h-full w-full sm:w-[80vw] flex flex-row items-center justify-center bg-black">
                <div className="relative w-[85vw] h-[35vh] sm:w-[50vw] sm:h-[65vh]">
                  <Image
                    src={imageArray[currentIndex - 1]}
                    fill
                    alt="Cover photo"
                    className="w-full object-cover transition"
                  />
                </div>
              </div>
              <div className="w-0 h-full sm:w-[10vw] bg-black sm:flex sm:flex-col items-center justify-center">
                {currentIndex !== imageArray.length && (
                  <div
                    onClick={onNext}
                    className="absolute bottom-20 right-24 sm:static p-4 rounded-full border border-white text-white cursor-pointer"
                  >
                    <FaChevronRight size={12} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
