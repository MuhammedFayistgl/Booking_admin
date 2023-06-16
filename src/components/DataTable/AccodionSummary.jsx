import React from "react";
import AcodionCategory from "./Acdncategory";
import AccodionName from "./AccodionName";
import AccodionImage from "./AccodionImage";
import AccodionPlace from "./AccodionPlace";
import AccodionAmount from "./AccodionAmount";
import AccodionRating from "./AccodionRating";
import { AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccodionSummary = ({ data }) => {
  return (
    <>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
        <AcodionCategory category={data.category} />
        <AccodionImage profilImg={data.profilImg} />
        <AccodionName name={data.name} />
        <AccodionPlace place={data.place} />
        <AccodionAmount amount={data.amount} />
        <AccodionRating rating={data.rating} />
      </AccordionSummary>
    </>
  );
};

export default AccodionSummary;
