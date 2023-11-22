import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import { MdExpandMore } from "react-icons/md";

export default function BenefitsBlue() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full my-4">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span className="font-medium">Quais são os benefícios?</span>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="flex flex-col text-left list-disc pl-4 text-gray-500">
            <li>Seleção Abrangente</li>
            <li>Desenhos animados</li>
            <li>Filmes</li>
            <li>Jogos</li>
            <li>Atividades educativas</li>
            <li>Envolvimento Através da Diversão</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
