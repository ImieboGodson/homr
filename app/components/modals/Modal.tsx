"use client";

import { IoCloseOutline } from "react-icons/io5";
import Button from "../buttons/Button";
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  body: React.ReactElement;
  onSubmit?: () => void;
  actionLable?: string;
  secondaryActionLable?: string;
  secondaryAction?: () => void;
  isDisable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onSubmit,
  actionLable,
  secondaryAction,
  secondaryActionLable,
  body,
  isDisable,
}) => {
  const [showModal, setShowModal] = useState(false);

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
      onClose();
    }, 300);
  }, [isDisable, onClose]);

  const handleSubmit = useCallback(() => {
    if (isDisable || !onSubmit) {
      return;
    }

    onSubmit();
  }, [onSubmit, isDisable]);

  const handleSecondaryAction = useCallback(() => {
    if (isDisable || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [isDisable, secondaryAction]);

  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed inset-0 overflow-hidden flex justify-center items-center bg-neutral-800/70 z-50">
      <div className="w-full md:w-4/6 lg:w-2/4 xl:w-2/5 h-full md:h-auto my-6 ">
        <div
          className={`w-full h-full  translate duration-300 ${
            showModal ? "translate-y-0" : "translate-y-[120%]"
          } ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full h-full md:h-auto overflow-hidden flex flex-col items-center justify-between md:max-h-[80vh] bg-white rounded-lg translate">
            <div className="relative w-full p-4 flex items-center justify-center text-lg font-bold border-b">
              <div
                onClick={handleClose}
                className="absolute left-4 p-2 rounded-full hover:bg-neutral-100 cursor-pointer transition"
              >
                <IoCloseOutline size={22} />
              </div>
              {title}
            </div>
            <div className="w-full px-5 py-7 overflow-x-hidden overflow-y-auto ">
              {body}
            </div>
            {onSubmit && actionLable && (
              <div className="w-full p-4 flex gap-4 items-center justify-between border-t">
                {secondaryAction && secondaryActionLable && (
                  <Button
                    title={secondaryActionLable}
                    onClick={handleSecondaryAction}
                    outline
                  />
                )}
                <Button title={actionLable} onClick={handleSubmit} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
