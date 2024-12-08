import { useState } from "react";
import { Card } from "./components/Card";
import { data } from "./data/dataCard";

export default function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    const increment = step + 1;
    const value = Math.min(increment, data.length - 1);

    // min (1, 2)
    // min (2, 2)
    // min (3, 2)

    setStep(value);
  };

  const backStep = () => {
    const decremento = step - 1;
    const value = Math.max(decremento, 0);

    // max (2, 0)
    // max (1, 0)
    // max (0, 0)
    // max (-1, 0)

    setStep(value);
  };

  const positionCard = (step: number) => {
    setStep(step);
  };

  // estados
  const cardActual = data[step];

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card
        key={1}
        data={cardActual}
        maxCard={data.length - 1}
        nextStep={nextStep}
        backStep={backStep}
        positionCard={positionCard}
        cardActual={step}
      />
    </div>
  );
}
