import type { ConsoleRoot } from "@textjs/react";

let root: ConsoleRoot | null = null;

export async function playConsoleGame(options: { onWin: () => void }) {
  if (root && !root.unmounted) return;

  // Loaded on demand, so visitors who never open the console don't pay for it
  const [{ createConsoleRoot }, { SnakeGame, WINNING_SCORE }] =
    await Promise.all([import("@textjs/react"), import("./SnakeGame")]);

  root = await createConsoleRoot({
    width: 60,
    height: 22,
    onExit: () => console.log("Thanks for playing! Type snake() to try again."),
  });
  root.render(
    <SnakeGame
      onScore={(score) => {
        if (score >= WINNING_SCORE) options.onWin();
      }}
    />,
  );
}
