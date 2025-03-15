// @mui
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------
const _faqs = [
  {
    id: 1,
    value: "panel1",
    heading: "Can I interact with instructors and other students?",
    detail: " ",
  },
  {
    id: 2,
    value: "panel2",
    heading: "What if i need help during the course?",
    detail: " ",
  },
  {
    id: 3,
    value: "panel3",
    heading: "Are there any prerequisites for enrolling in a course?",
    detail: " ",
  },
  {
    id: 4,
    value: "panel7",
    heading: "Can I get a refund if I'm not satisfied with the course?",
    detail: " ",
  },
];

//----------------------------------------------------------------------
export default function FaqsList() {
  return (
    <>
      {_faqs.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={
              <Iconify icon={"iconoir:plus"} width={20} height={20} />
            }
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "start" }}>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
