"use client";

import { Calendar } from "@/components/ui/calendar";
import { Camera, Clock, Globe, Globe2, Video } from "lucide-react";
import { useState } from "react";

const ScheduleACall = () => {
  const [date, setDate] = useState([]);
  return (
    <div className="flex w-full flex-col items-center justify-center px-5 py-20">
      <div className="flex w-full max-w-xl flex-col gap-10">
        <h1 className="text-center text-3xl font-medium md:text-5xl">
          Schedule a Call
        </h1>
        <div className="grid w-full rounded-lg border border-black/10 md:grid-cols-2">
          <div className="flex w-full flex-col border-b md:border-b-0 border-black/10 p-5 md:border-r">
            <span className="text-xs font-medium text-custom-black/70">
              Svype Tech
            </span>
            <span className="text-2xl font-medium text-primary">Meeting</span>
            <div className="flex flex-col gap-3 py-5">
              <div className="flex items-center gap-1.5 text-custom-black/70">
                <Clock className="size-5 min-w-5" />
                <span className="text-sm font-medium">30 min</span>
              </div>
              <div className="flex items-center gap-1.5 text-custom-black/70">
                <Video className="size-5 min-w-5" />
                <span className="text-sm font-medium">
                  Web conferencing details provided upon confirmation.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <span className="font-medium">Select a Date & Time</span>
            <Calendar
              mode="multiple"
              selected={date}
              onSelect={setDate}
              className="self-center"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-primary">
                Time zone
              </span>
              <div className="flex items-center gap-2 text-custom-black/70">
                <Globe2 className="size-3.5" strokeWidth={1.2} />
                <span className="text-xs">
                  Pakistan, Maldives Time (10:20px)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleACall;
