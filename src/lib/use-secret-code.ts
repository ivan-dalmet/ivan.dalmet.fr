import { useEffect, useRef, useState } from "react";
import { useInputEvent } from "./use-input-event";

export const useSecretCode = (
  secretCode: KeyboardEvent["code"][],
  onTrigger?: () => void,
) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();
  const countRef = useRef(count);
  countRef.current = count;
  const onTriggerRef = useRef(onTrigger);
  onTriggerRef.current = onTrigger;

  useEffect(() => {
    if (key == null) return;
    if (key !== secretCode[countRef.current]) {
      setCount(0);
      return;
    }

    setCount((state) => {
      return state + 1;
    });
    if (countRef.current + 1 === secretCode.length) {
      onTriggerRef.current?.();
      setSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, secretCode.join(",")]);

  return success;
};
