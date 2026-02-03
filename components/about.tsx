"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre Mim");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28 text-justify"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading >Sobre Mim</SectionHeading>
      
      <p className="mb-3">
        Após iniciar minha trajetória acadêmica na área de ciências, descobri uma
        paixão profunda pela tecnologia e migrei para a programação. Atualmente
        cursando <span className="font-bold">TI, ADS e Gestão de TI</span>,
        complementei meu aprendizado com bootcamps e cursos intensivos e
        técnicos. Sou movida pela curiosidade pela <span className="font-bold">programação</span>, então estou
        sempre estudando novas tecnologias para me capacitar mais ainda.
      </p>
      <p>
        Quando não estou <span className="italic">codando</span>, gosto de
        relaxar passeando com amigos e assistindo a muitos{" "}
        <span className="font-bold">filmes de Bollywood</span> (uma paixão
        pessoal!). Continuo sendo uma curiosa sobre{" "}
        <span className="font-bold">biologia e ciência</span> em geral, e nas
        horas vagas, gosto de tocar <span className="font-bold">violão</span>.
      </p>
    </motion.section>
  );
}
