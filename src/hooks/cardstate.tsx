import { useState } from "react";

export function useCardStatus() {
  const [step, setStep] = useState(0);

  return {
    step,
    setStep,
  };
}
