"use client";

import useViewingModal from "@/app/hooks/useViewingModal";
import Modal from "./Modal";
import Button from "../buttons/Button";
import TextSelect from "../inputs/TextSelect";
import { tourTimes } from "@/app/libs/options";
import BasicCalendar from "../inputs/BasicCalendar";
import { useCallback, useState } from "react";

const ViewingModal = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(tourTimes[0]);
  const viewModal = useViewingModal();

  const onSubmit = useCallback(() => {}, []);

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
      <Button title="Schedule Tour" onClick={() => {}} />
    </div>
  );

  return (
    <Modal
      title="Schedule A Tour"
      isOpen={viewModal.isOpen}
      onClose={viewModal.onClose}
      body={body}
    />
  );
};

export default ViewingModal;
