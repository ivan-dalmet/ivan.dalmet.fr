"use client";

import { AnimatePresence, motion, useAnimate } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import { LuTrophy, LuX } from "react-icons/lu";

export const Achievement = ({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) => {
  const [show, setShow] = useState(true);
  const [containerRef, animateContainer] = useAnimate();
  const [iconRef, animateIcon] = useAnimate();
  const [closeRef, animateClose] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      if (!containerRef.current || !iconRef.current || !closeRef) return;
      animateContainer(
        containerRef.current,
        { scale: 1 },
        {
          type: "spring",
          mass: 1,
          damping: 11,
          stiffness: 186,
        },
      );
      animateIcon(
        iconRef.current,
        { scale: 0.9 },
        {
          delay: 0.4,
          type: "spring",
          mass: 1,
          damping: 11,
          stiffness: 186,
        },
      );

      animateClose(
        closeRef.current,
        {
          scale: 1,
        },
        {
          delay: 1,
          type: "spring",
          mass: 1,
          damping: 11,
          stiffness: 186,
        },
      );

      await animateContainer(
        containerRef.current,
        { width: "auto" },
        {
          delay: 1,
          type: "spring",
          mass: 1,
          damping: 14,
          stiffness: 203,
        },
      );

      if (!containerRef.current) return;
      animateContainer(
        containerRef.current,
        {
          y: -5,
        },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 1,
        },
      );
    };
    animation();
  }, [
    animateClose,
    animateContainer,
    animateIcon,
    closeRef,
    containerRef,
    iconRef,
  ]);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="pointer-events-auto fixed left-1/2 top-8 z-[9999] -translate-x-1/2">
          <motion.div
            ref={containerRef}
            initial={{
              scale: 0,
              width: 48,
            }}
            exit={{
              opacity: 0,
              y: -100,
              scale: 0.8,
              transition: { ease: "backIn" },
            }}
            className="flex items-center gap-1 overflow-hidden rounded-full bg-highlight p-0 text-background shadow-2xl"
          >
            <motion.div
              ref={iconRef}
              initial={{
                scale: 0,
              }}
              className="m-[2px] flex aspect-square size-[44px] items-center justify-center rounded-full bg-background text-highlight"
            >
              {icon ?? <LuTrophy />}
            </motion.div>
            <motion.div className="min-w-0 whitespace-nowrap text-sm leading-tight">
              <div className="text-[8px] uppercase tracking-wide opacity-70">
                Achievement unlocked
              </div>
              {children}
            </motion.div>
            <motion.button
              ref={closeRef}
              initial={{
                scale: 0,
              }}
              type="button"
              aria-label="Close"
              onClick={() => setShow(false)}
              className="flex flex-none items-center justify-center py-2 pe-4 ps-2 opacity-60 hover:opacity-100"
            >
              <LuX />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
