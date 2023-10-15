"use client";

import useViewingModal from "@/app/hooks/useViewingModal";
import Modal from "./Modal";
import Button from "../buttons/Button";
import TextSelect from "../inputs/TextSelect";
import { tourTimes } from "@/app/libs/options";
import BasicCalendar from "../inputs/BasicCalendar";
import { useCallback, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const ViewingModal = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(tourTimes[0]);
  const [isLoading, setIsLoading] = useState(false);
  const viewingModal = useViewingModal();
  const router = useRouter();
  const params = useParams();

  const onSubmit = useCallback(() => {
    if (!date || !time) {
      return;
    }

    setIsLoading(true);

    const rawDate = date;

    const timeArray = time.value.split(":");
    rawDate.setHours(Number(timeArray[0]), Number(timeArray[1]), 0);

    axios
      .post("/api/viewings", {
        date: rawDate,
        listingId: params?.listingId,
      })
      .then(() => {
        setDate(new Date());
        setTime(tourTimes[0]);
        viewingModal.onClose();
        toast.success("Viewing booked!");
        router.push("/viewings");
      })
      .catch(() => {
        toast.error("Something broke.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [date, time, params?.listingId, viewingModal, router]);

  const body = (
    <div className="w-full flex flex-col gap-6 items-start">
      <div className="w-full flex flex-col gap-8 items-start">
        <div className="w-full flex flex-col items-start">
          <p className="text-base font-bold">Pick a tour date</p>
          <div className="w-full">
            <BasicCalendar
              value={date}
              onChange={(value: Date) => setDate(value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 items-start">
          <p className="text-base font-bold">Pick a time slot</p>
          <TextSelect
            value={time}
            options={tourTimes}
            onChange={(value) => setTime(value)}
            searchable={false}
          />
        </div>
      </div>
      <Button title="Schedule Tour" onClick={onSubmit} isDisabled={isLoading} />
    </div>
  );

  return (
    <Modal
      title="Schedule A Tour"
      isOpen={viewingModal.isOpen}
      onClose={viewingModal.onClose}
      body={body}
    />
  );
};

export default ViewingModal;
