"use client";

import useViewingModal from "@/app/hooks/useViewingModal";
import Modal from "./Modal";
import useDisclaimerModal from "@/app/hooks/useDisclaimerModal";
import Button from "../buttons/Button";
import { PiWarningDuotone } from "react-icons/pi";
import { useCallback } from "react";
import useContactModal from "@/app/hooks/useContactModal";

interface DisclaimerModalProps {
  onClickContext: string;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  onClickContext,
}) => {
  const disclaimerModal = useDisclaimerModal();
  const viewModal = useViewingModal();
  const contactModal = useContactModal();

  const handleClick = useCallback(() => {
    disclaimerModal.onClose();

    if (onClickContext === "contact") {
      return contactModal.onOpen();
    }

    return viewModal.onOpen();
  }, [disclaimerModal, viewModal, contactModal, onClickContext]);

  const body = (
    <div className="w-full flex flex-col gap-12 items-center justify-center">
      <div className="w-[80%] flex flex-col gap-3 items-center">
        <PiWarningDuotone size={50} />
        <p className="text-sm font-light text-center">
          Please be aware that HOMR is only a marketplace and will not be liable
          for any transactions, interactions, and activities carried out outside
          HOMR.
        </p>
      </div>
      <Button title="I understand" onClick={handleClick} />
    </div>
  );

  return (
    <Modal
      title="Disclaimer"
      isOpen={disclaimerModal.isOpen}
      onClose={disclaimerModal.onClose}
      body={body}
    />
  );
};

export default DisclaimerModal;
