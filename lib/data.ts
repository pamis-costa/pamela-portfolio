import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amk from "../public/amk.png"; 
import ecobyte from "../public/ecobyte.png"; 
import onepets from "../public/one-pets.png";
import { FaMicrosoft } from "react-icons/fa";

import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiGit, SiTailwindcss, 
  SiPython, SiFigma, SiLunacy,
  SiAdobephotoshop, SiCoreldraw 
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre Mim",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Formação",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // --- BLOCO DE EXPERIÊNCIA PROFISSIONAL (Topo) ---
  {
    title: "Estagiário de TI - SEDUC-PA",
    location: "Belém-PA",
    description:
      "Auxílio em projetos, desenvolvimento, manutenção e suporte técnico na Secretaria de Educação do Estado do Pará.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2025 - Atualmente",
  },

  // --- BLOCO DE FORMAÇÃO ACADÊMICA (Abaixo) ---
  {
    title: "Tecnologia da Informação",
    location: "UFMS - EAD",
    description:
      "Graduação Tecnóloga (3º Semestre). Foco em fundamentos de TI e desenvolvimento.",
    icon: React.createElement(LuGraduationCap),
    date: "Conclusão: 12/2027",
  },
  {
    title: "Técnico em Redes de Computadores",
    location: "IFBaiano - EAD",
    description:
      "Curso Técnico (1º Semestre). Foco em infraestrutura, servidores e redes.",
    icon: React.createElement(LuGraduationCap),
    date: "Conclusão: 12/2027",
  },
  {
    title: "Análise e Desenv. de Sistemas",
    location: "PUCRS - EAD",
    description:
      "Graduação Tecnóloga (4º Semestre) com ênfase em Fullstack e Mobile.",
    icon: React.createElement(LuGraduationCap),
    date: "Conclusão: 01/2027",
  },
  {
    title: "Gestão em TI",
    location: "UNIUBE - EAD",
    description:
      "Graduação Tecnóloga (4º Semestre). Foco em gestão de projetos ágeis e equipes.",
    icon: React.createElement(LuGraduationCap),
    date: "Conclusão: 12/2026",
  },
  {
    title: "Técnico em Desenv. de Sistemas",
    location: "Escola FAT - EAD",
    description:
      "Curso Técnico concluído. Base sólida em lógica e programação.",
    icon: React.createElement(LuGraduationCap),
    date: "Concluído: 11/2025",
  },
  {
    title: "Técnico em Informática",
    location: "EETEPA Vilhena Alves",
    description:
      "Curso Técnico presencial concluído. Manutenção e suporte.",
    icon: React.createElement(LuGraduationCap),
    date: "Concluído: 06/2025",
  },
] as const;

export const projectsData = [
  {
    title: "Site - Amazônia Marketing",
    description:
      "Desenvolvimento de um site para uma empresa Amazônia Marketing focada na região da Amazônia.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: amk,
  },
  {
    title: "Site - Projeto Ecobyte",
    description:
      "Site desenvolvido para o projeto Minas Programam, sobre o projeto integrador I do curso Técnico em Informática da EETEPA Vilhena Alves. ",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: ecobyte,
  },
  {
    title: "Site - One - Pets",
    description:
      "Desenvolvimento de site e-commerce de produtos personalizados para pets, com foco em Front-End.",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
    imageUrl: onepets,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Office 365",
  "Figma",
  "Lunacy",
  "Adobe Photoshop",
  "CorelDRAW",
] as const;


export const skillIcons = {
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Git": SiGit,
  "Tailwind": SiTailwindcss,
  "Python": SiPython,
  "Office 365": FaMicrosoft,
  "Figma": SiFigma,
  "Lunacy": SiLunacy,
  "Adobe Photoshop": SiAdobephotoshop,
  "CorelDRAW": SiCoreldraw,
} as const;