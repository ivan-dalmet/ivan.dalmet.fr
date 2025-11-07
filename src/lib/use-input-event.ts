import { useEffect, useState } from "react";
export const useInputEvent = () => {
  const [key, setKey] = useState<string | null>(null);
  useEffect(() => {
    const keyDownHandler = ({ key }: KeyboardEvent) => {
      setKey(key);
    };
    const keyUpHandler = () => setKey(null);
    global.addEventListener("keydown", keyDownHandler);
    global.addEventListener("keyup", keyUpHandler);
    return () => {
      global.removeEventListener("keydown", keyDownHandler);
      global.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
  return key;
};
