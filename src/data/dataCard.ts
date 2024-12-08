import meditation from "../assets/meditation.svg";
import programin from "../assets/programming.svg";
import time from "../assets/time_managment.svg";

export interface CardProps {
  title: string;
  content: string;
  img: string;
  bg: string;
}

export const data: CardProps[] = [
  {
    title: "Dedica moltes hores",
    content:
      "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
    bg: "#4da2a8",
    img: time,
  },
  {
    title: "Programa projectes propis",
    content:
      "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutoriales. La motivació i la implicació en el projecte ajudará a accelerar el teu aprenentatge.",
    bg: "#d3d4d9",
    img: programin,
  },
  {
    title: "Procura descansar",
    content:
      "Descansar bé i desconnectar són vitals. D´aquesta manera reduiras l´estrés i l´ansietat.Millorarás la teva concentració i consilidarás el teu aprenentatge.",
    bg: "#fdd167",
    img: meditation,
  },
];
