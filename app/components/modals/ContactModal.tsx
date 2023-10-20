"use client";

import { SafeUser } from "@/app/types";
import Modal from "./Modal";
import useContactModal from "@/app/hooks/useContactModal";
import { useState } from "react";

interface ContactModalProps {
  data: SafeUser;
  ownerType: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ data, ownerType }) => {
  const [date, setDate] = useState(new Date(data.createdAt));
  const contactModal = useContactModal();

  const body = (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="p-5 flex flex-row justify-center items-center text-slate-500 bg-slate-300 rounded-full border-4 border-white shadow-md">
        <p className="text-2xl font-extrabold">{data.name[0]}</p>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <p className="text-2xl font-extrabold">{data.name}</p>
        <p className="text-xs">Joined {date.getFullYear()}</p>
      </div>
      <div className="w-full flex flex-col gap-1 items-center">
        <p className="text-xs font-medium text-slate-400">Phone</p>
        <p className="text-base">+2348100082736</p>
      </div>
      <div className="w-full flex flex-col gap-1 items-center">
        <p className="text-xs font-medium text-slate-400">Email</p>
        <p className="text-base">{data.email}</p>
      </div>
    </div>
  );

  return (
    <Modal
      title={`Contact ${ownerType}`}
      isOpen={contactModal.isOpen}
      onClose={contactModal.onClose}
      body={body}
    />
  );
};

export default ContactModal;
