"use client";

import { useState } from "react";
import { featuredInfo } from "./info";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.7 },
};

export function DefaultAccordion() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[#fafafa] px-2 rounded-[15px]">
      {featuredInfo.map((info, i) => {
        return (
          <div key={i}>
            <Accordion open={open === ++i} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                className={`${
                  open === i && " text-[#f25525]"
                } capitalize p-2 font-[500]`}
                onClick={() => handleOpen(i)}
              >
                {info.name}
              </AccordionHeader>
              <AccordionBody>{info.description}</AccordionBody>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
