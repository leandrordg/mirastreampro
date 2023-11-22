import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span className="font-medium">O que é o MiraStream PRO?</span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            O MiraStream PRO é um avançado sistema multimídia que oferece
            qualidade de imagem e som excepcionais, projetado para melhorar sua
            experiência de entretenimento.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <span className="font-medium">
            Quais dispositivos são compatíveis com o MiraStream PRO?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            O MiraStream PRO é compatível com uma ampla variedade de
            dispositivos, incluindo smartphones, tablets, laptops e muito mais.
            Ele se integra facilmente com sistemas iOS, Android e Windows.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <span className="font-medium">
            Como faço para configurar o MiraStream PRO?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            A configuração é simples e intuitiva. Basta seguir as instruções
            fornecidas no manual do usuário ou no guia de instalação incluído.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <span className="font-medium">
            Como faço para escolher o plano adequado para o meu filho ou
            acompanhante?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            Por meio de avaliações médicas, assim tendo certeza de qual é o
            melhor e mais apropriado plano para suas necessidades.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <span className="font-medium">
            Existe suporte técnico disponível?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            Sim, oferecemos suporte técnico dedicado para responder a todas as
            suas dúvidas e fornecer assistência em caso de problemas.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <span className="font-medium">
            Como o MiraStream PRO melhora viagens de carro?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            O MiraStream PRO pode transformar seu veículo em um centro de
            entretenimento, permitindo que passageiros assistam a filmes e
            séries em telas maiores durante viagens longas.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <span className="font-medium">Qual é a política de garantia?</span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            Informações detalhadas sobre garantia e políticas de devolução podem
            ser encontradas em nosso site. Geralmente, oferecemos garantia para
            garantir sua satisfação.
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <span className="font-medium">
            Onde posso comprar o MiraStream PRO?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <span>
            Você pode adquirir o MiraStream PRO em nossa loja online ou em
            nossos revendedores autorizados. Verifique nosso site para obter
            informações de compra atualizadas.
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
