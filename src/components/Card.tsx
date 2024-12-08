import { motion } from "framer-motion";
import { CardProps } from "../data/dataCard";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Status } from "./Status";
interface Props {
  data: CardProps;
  cardActual: number;
  maxCard: number;
  nextStep: () => void;
  backStep: () => void;
  positionCard: (step: number) => void;
}

export function Card(props: Props): JSX.Element {
  const { data, maxCard, backStep, nextStep, positionCard, cardActual } = props;

  console.log(cardActual);

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="border w-[300px] h-[600px] shadow-xl rounded-xl overflow-auto"
    >
      <div
        style={{ backgroundColor: `${data.bg}` }}
        className="w-full h-[60%] flex justify-center items-center"
      >
        <img className="w-[80%] " src={data.img} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center w-[90%] mx-auto gap-2 mt-2">
        <h1 className="text-md font-bold">{data.title}</h1>
        <p className=" text-sm font-light mx-4 text-justify">{data.content}</p>
      </div>
      <div className="flex justify-end mx-6 mt-6 gap-3 ">
        {/* renderizado condicional */}
        {/* {evaluas ? si : no} */}
        {cardActual > 0 ? (
          <div
            onClick={backStep}
            className="flex justify-center items-center border hover:scale-125 cursor-pointer border-black rounded-full text-black "
          >
            <ChevronLeft size={35} strokeWidth={1} />
          </div>
        ) : null}

        {cardActual < maxCard ? (
          <div
            onClick={nextStep}
            className="cursor-pointer rounded-full hover:scale-125 bg-black text-white w-10 h-10 flex justify-center items-center"
          >
            <ChevronRight />
          </div>
        ) : null}
      </div>
      <Status
        positionCard={positionCard}
        cardActual={cardActual}
        dataLenght={maxCard + 1}
      />
    </motion.div>
  );
}
