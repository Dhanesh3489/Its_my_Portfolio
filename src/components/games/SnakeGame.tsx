import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameStateRef = useRef({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    score: 0,
    gameLoop: null as number | null,
  });

  const gridSize = 20;
  const tileSize = 20;

  const resetGame = () => {
    const state = gameStateRef.current;
    state.snake = [{ x: 10, y: 10 }];
    state.food = { x: 15, y: 15 };
    state.direction = { x: 1, y: 0 };
    state.nextDirection = { x: 1, y: 0 };
    state.score = 0;
    setScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = gameStateRef.current;
    let lastTime = 0;
    const gameSpeed = 150; // ms per frame

    const gameLoop = (currentTime: number) => {
      if (currentTime - lastTime < gameSpeed) {
        state.gameLoop = requestAnimationFrame(gameLoop);
        return;
      }
      lastTime = currentTime;

      // Update direction
      state.direction = state.nextDirection;

      // Move snake
      const head = { ...state.snake[0] };
      head.x += state.direction.x;
      head.y += state.direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        setGameOver(true);
        return;
      }

      // Check self collision
      if (state.snake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return;
      }

      state.snake.unshift(head);

      // Check food collision
      if (head.x === state.food.x && head.y === state.food.y) {
        state.score++;
        setScore(state.score);
        // Generate new food
        state.food = {
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
        };
      } else {
        state.snake.pop();
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = "#333";
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * tileSize, 0);
        ctx.lineTo(i * tileSize, gridSize * tileSize);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * tileSize);
        ctx.lineTo(gridSize * tileSize, i * tileSize);
        ctx.stroke();
      }

      // Draw snake
      state.snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "#10b981" : "#22c55e";
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize - 1, tileSize - 1);
      });

      // Draw food
      ctx.fillStyle = "#ef4444";
      ctx.fillRect(state.food.x * tileSize, state.food.y * tileSize, tileSize - 1, tileSize - 1);

      if (!gameOver) {
        state.gameLoop = requestAnimationFrame(gameLoop);
      }
    };

    state.gameLoop = requestAnimationFrame(gameLoop);

    const handleKeyPress = (e: KeyboardEvent) => {
      const { direction, nextDirection } = state;
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) nextDirection.x = 0, nextDirection.y = -1;
          break;
        case "ArrowDown":
          if (direction.y === 0) nextDirection.x = 0, nextDirection.y = 1;
          break;
        case "ArrowLeft":
          if (direction.x === 0) nextDirection.x = -1, nextDirection.y = 0;
          break;
        case "ArrowRight":
          if (direction.x === 0) nextDirection.x = 1, nextDirection.y = 0;
          break;
      }
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      if (state.gameLoop) cancelAnimationFrame(state.gameLoop);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameOver]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-between w-full max-w-md px-4">
        <div className="text-lg font-bold">Score: {score}</div>
        {gameOver && <div className="text-red-500 font-bold">Game Over!</div>}
      </div>
      <canvas
        ref={canvasRef}
        width={gridSize * tileSize}
        height={gridSize * tileSize}
        className="border-2 border-border rounded-lg bg-background"
      />
      <div className="text-sm text-muted-foreground">
        Use arrow keys to move
      </div>
      {gameOver && (
        <Button onClick={resetGame} className="mt-2">
          Play Again
        </Button>
      )}
    </div>
  );
};

export default SnakeGame;
