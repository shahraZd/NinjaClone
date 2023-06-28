import { Fragment, useState, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const MyAccordion = ({ item }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  //   useEffect(() => {
  //     setOpen(0);
  //   }, [open]);

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <Fragment>
      <Accordion
        open={open === item.order}
        icon={<Icon id={item.order} open={open} />}
        animate={customAnimation}
      >
        <AccordionHeader
          onClick={() => handleOpen(item.order)}
          className={` hover:text-primary-200 ${
            open === item.order ? "text-primary-500" : "text-white"
          }`}
        >
          {item.question}
        </AccordionHeader>
        <AccordionBody className="text-white text-base sm:text-sm">
          {item.answer}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};
export default MyAccordion;
