"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/Tooltip";
import { people } from "@/data";

 
const SocialMedia= ()=> {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default SocialMedia;