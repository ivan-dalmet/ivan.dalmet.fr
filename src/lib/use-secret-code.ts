import { useEffect, useState } from "react";
import { useInputEvent } from "./use-input-event";

export const useSecretCode = (
  secretCode: KeyboardEvent["code"][],
  onTrigger?: () => void,
) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();

  useEffect(() => {
    if (key == null) return;
    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }

    setCount((state) => state + 1);
    if (count + 1 === secretCode.length) {
      onTrigger?.();
      setSuccess(true);
    }
  }, [key]);

  return success;
};
