import { Minus, Dot } from "lucide-react";
interface Props {
  cardActual: number;
  dataLenght: number;
  positionCard: (step: number) => void;
}

export function Status({ cardActual, dataLenght, positionCard }: Props) {
  const indexes = Array(dataLenght).fill(0);
  function getMinusOrDot(isMinus: boolean, key: number) {
    if (isMinus) {
      return (
        <Minus
          className="cursor-pointer"
          onClick={() => positionCard(key)}
          key={key}
          size={28}
          color="#000000"
          strokeWidth={2}
        />
      );
    } else
      return (
        <Dot
          className="cursor-pointer"
          onClick={() => positionCard(key)}
          key={key}
          size={14}
          color="#A9A9A9"
          strokeWidth={8}
        />
      );
  }

  return (
    <div className="flex justify-normal items-center mx-6 gap-1">
      {indexes.map((_, index) => getMinusOrDot(cardActual === index, index))}
    </div>
  );
}
