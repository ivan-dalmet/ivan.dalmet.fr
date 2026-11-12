import { ReactNode, useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  useApp,
  useInput,
  useTheme,
  useViewport,
} from "@textjs/react";

const WIDTH = 20;
const HEIGHT = 12;
const TICK_MS = 120;
export const WINNING_SCORE = 50;

type Direction = "up" | "down" | "left" | "right";
type Point = { x: number; y: number };
type Game = {
  snake: Point[];
  direction: Direction;
  queue: Direction[];
  food: Point;
  score: number;
  status: "ready" | "running" | "paused" | "over";
};

const OPPOSITE: Record<Direction, Direction> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

const KEYMAP: Record<string, Direction> = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  w: "up",
  s: "down",
  a: "left",
  d: "right",
  z: "up",
  q: "left",
};

function placeFood(snake: Point[]): Point {
  const free: Point[] = [];
  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      if (!snake.some((p) => p.x === x && p.y === y)) free.push({ x, y });
    }
  }
  return free[Math.floor(Math.random() * free.length)] ?? { x: -1, y: -1 };
}

function newGame(): Game {
  const y = Math.floor(HEIGHT / 2);
  const snake = [
    { x: 6, y },
    { x: 5, y },
    { x: 4, y },
  ];
  return {
    snake,
    direction: "right",
    queue: [],
    food: placeFood(snake),
    score: 0,
    status: "ready",
  };
}

function step(game: Game) {
  const next = game.queue.shift();
  if (next && next !== OPPOSITE[game.direction]) game.direction = next;

  const head = game.snake[0];
  const newHead = {
    x:
      head.x +
      (game.direction === "left" ? -1 : game.direction === "right" ? 1 : 0),
    y:
      head.y +
      (game.direction === "up" ? -1 : game.direction === "down" ? 1 : 0),
  };
  const isEating = newHead.x === game.food.x && newHead.y === game.food.y;
  const body = isEating ? game.snake : game.snake.slice(0, -1);
  const hitWall =
    newHead.x < 0 || newHead.y < 0 || newHead.x >= WIDTH || newHead.y >= HEIGHT;

  if (hitWall || body.some((p) => p.x === newHead.x && p.y === newHead.y)) {
    game.status = "over";
    return;
  }

  game.snake = [newHead, ...body];
  if (isEating) {
    game.score += 10;
    game.food = placeFood(game.snake);
  }
}

export const SnakeGame = (props: { onScore: (score: number) => void }) => {
  const theme = useTheme();
  const viewport = useViewport();
  const { exit } = useApp();
  const game = useRef<Game>(newGame());
  const [, forceRender] = useState(0);
  const { onScore } = props;

  // Pause while DevTools has the focus, so keys can reach the game
  const isTicking =
    game.current.status === "running" && viewport.focused && !viewport.paused;

  useEffect(() => {
    if (!isTicking) return;
    const interval = setInterval(() => {
      const previousScore = game.current.score;
      step(game.current);
      if (game.current.score !== previousScore) onScore(game.current.score);
      forceRender((n) => n + 1);
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [isTicking, onScore]);

  useInput((e) => {
    const g = game.current;
    if (e.key === "escape" || e.input === "x") {
      exit();
      return;
    }

    const direction = e.ctrl || e.meta ? undefined : KEYMAP[e.key];
    if (direction) {
      if (g.status === "ready" || g.status === "paused") g.status = "running";
      if (g.status === "running") {
        const last = g.queue[g.queue.length - 1] ?? g.direction;
        if (
          direction !== last &&
          direction !== OPPOSITE[last] &&
          g.queue.length < 3
        ) {
          g.queue.push(direction);
        }
      }
    } else if (e.key === "space") {
      if (g.status === "over")
        game.current = { ...newGame(), status: "running" };
      else if (g.status !== "ready") {
        g.status = g.status === "running" ? "paused" : "running";
      }
    } else {
      return;
    }
    e.stopPropagation();
    forceRender((n) => n + 1);
  });

  const g = game.current;
  const rows: ReactNode[] = [];
  for (let y = 0; y < HEIGHT; y++) {
    const cells: ReactNode[] = [];
    for (let x = 0; x < WIDTH; x++) {
      const index = g.snake.findIndex((p) => p.x === x && p.y === y);
      if (index === 0) {
        cells.push(
          <Text key={x} bg={theme.accent}>
            {"  "}
          </Text>,
        );
      } else if (index > 0) {
        cells.push(
          <Text key={x} bg={theme.success}>
            {"  "}
          </Text>,
        );
      } else if (g.food.x === x && g.food.y === y) {
        cells.push(
          <Text key={x} color={theme.danger}>
            {"◆ "}
          </Text>,
        );
      } else {
        cells.push(
          <Text key={x} color={theme.border}>
            {"· "}
          </Text>,
        );
      }
    }
    rows.push(
      <Text key={y} wrap="nowrap">
        {cells}
      </Text>,
    );
  }

  const status = {
    ready: "press an arrow key to start",
    running: g.score >= WINNING_SCORE ? "achievement unlocked! 🏆" : "",
    paused: "paused · space to resume",
    over: "game over · space to retry",
  }[g.status];

  return (
    <Box className="flex-col items-center gap-1 p-1">
      <Box className="flex-row" width={WIDTH * 2 + 2}>
        <Text bold>🐍 SNAKE</Text>
        <Box className="grow" />
        <Text color="subtle">{`score ${g.score}`}</Text>
      </Box>
      <Box className="flex-col rounded border" borderColor={theme.border}>
        {rows}
      </Box>
      <Text color={g.status === "over" ? "danger" : "subtle"}>{status}</Text>
      <Text color="muted">{`reach ${WINNING_SCORE} pts · esc to quit`}</Text>
    </Box>
  );
};
