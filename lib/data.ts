import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import converrcyImg from "@/public/converrcy.png";
import jogodavelhaImg from "@/public/jogodavelha.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Formação",
    hash: "#formacao",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const formacaoData = [
  {
    title: "Começo do Curso Técnico",
    location: "SENAI, Blumenau",
    description:
      "Começei o curso de desenvolvimento de sistemas que no inicio me ajudou muito com lógica de programação, design e até me introduziu a banco de dados. Usava Java, Portugol e Figma como principais ferramentas.",
    icon: React.createElement(LuGraduationCap),
    date: "02 / 2022",
  },
  {
    title: "BootCamp da Eliti",
    location: "AMcom, Blumenau",
    description:
      "Entrei no BootCamp de Next.Js da Eliti onde no período de um mês evolui muito. Sai do conhecimento básico de Front-end até o meu primeiro projeto em React e Next, o que em pouco tempo aumentou meu domínio nas linguagens e me influenciou a focar mais no Front-end. ",
    icon: React.createElement(CgWorkAlt),
    date: "11 - 12 / 2023",
  },
  {
    title: "SA de Desenvolvimento de Sistemas",
    location: "SENAI, Blumenau",
    description:
      "A Situção de Aprendizagem, que funciona como um projeto final do meu curso, será um sistema completo para a indústria têxtil produzido pela turma, onde ajudo principalmente com o front-end (feito em HTML,CSS e JS) e a modelagem do banco de dados. No geral, o processo vem me proporcionando muita experiência em criação de projetos, trabalho em grupos e método SCRUM. ",
    icon: React.createElement(FaReact),
    date: "05 / 2024 - Momento",
  },
] as const;

export const projectsData = [
  {
    title: "Converrcy",
    description:
      "Conversor de moedas online totalmente funcional. No momento, meu principal projeto feito com CRA ( Create React App ).",
    tags: ["React", "TypeScript", "Figma", "Tailwind", "API"],
    imageUrl: converrcyImg,
  },
  {
    title: "Jogo da Velha",
    description:
      "Jogo da Velha produzido no bootcamp da ELITI que funcionou como minha ponte do React para Next.Js",
    tags: ["React", "TypeScript", "Next.js", "Vercel"],
    imageUrl: jogodavelhaImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Java ( Lóg. de Programação )",
  "Git",
  "Figma",
] as const;