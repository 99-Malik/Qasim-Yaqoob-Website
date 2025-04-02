"use client";

import GetInTouchButton from "../header/GetInTouchButton";
import PrimaryButton from "./PrimaryButton";
import { dialPhone, sendMessage } from "@/lib/data";

const CallButtons = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <GetInTouchButton title="Call Us" onClick={dialPhone} />
      <PrimaryButton title="Whatsapp" onClick={sendMessage} />
    </div>
  );
};

export default CallButtons;
