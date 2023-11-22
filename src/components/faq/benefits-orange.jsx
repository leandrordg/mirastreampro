import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import { MdExpandMore } from "react-icons/md";

export default function BenefitsOrange() {
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
            <li>Acessibilidade Total e Diversão</li>
            <li>Recursos Abundantes</li>
            <li>Legendas</li>
            <li>Áudio descrição</li>
            <li>Narração</li>
            <li>Interação</li>
            <li>Garantia de Acesso: Sem Barreiras</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
