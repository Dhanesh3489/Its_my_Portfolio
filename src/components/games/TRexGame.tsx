import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const TRexGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameStateRef = useRef({
    dino: { x: 50, y: 150, width: 40, height: 40, velocity: 0, jumping: false },
    obstacles: [] as { x: number; width: number; height: number }[],
    score: 0,
    gameLoop: null as number | null,
  });

  const jump = () => {
    const { dino } = gameStateRef.current;
    if (!dino.jumping && !gameOver) {
      dino.velocity = -12;
      dino.jumping = true;
    }
  };

  const resetGame = () => {
    const state = gameStateRef.current;
    state.dino.y = 150;
    state.dino.velocity = 0;
    state.dino.jumping = false;
    state.obstacles = [];
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
    const gravity = 0.6;
    const groundY = 150;

    const gameLoop = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ground
      ctx.fillStyle = "#333";
      ctx.fillRect(0, 190, canvas.width, 2);

      // Update and draw dino
      const dino = state.dino;
      dino.velocity += gravity;
      dino.y += dino.velocity;

      if (dino.y >= groundY) {
        dino.y = groundY;
        dino.velocity = 0;
        dino.jumping = false;
      }

      ctx.fillStyle = "#10b981";
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);

      // Update obstacles
      if (Math.random() < 0.02 && state.obstacles.length < 3) {
        state.obstacles.push({ x: canvas.width, width: 20, height: 40 });
      }

      state.obstacles = state.obstacles.filter((obs) => {
        obs.x -= 5;
        
        // Draw obstacle
        ctx.fillStyle = "#ef4444";
        ctx.fillRect(obs.x, groundY + 10, obs.width, obs.height);

        // Collision detection
        if (
          dino.x < obs.x + obs.width &&
          dino.x + dino.width > obs.x &&
          dino.y + dino.height > groundY + 10
        ) {
          setGameOver(true);
          if (state.gameLoop) cancelAnimationFrame(state.gameLoop);
          return false;
        }

        return obs.x > -obs.width;
      });

      // Update score
      if (!gameOver) {
        state.score++;
        if (state.score % 10 === 0) {
          setScore(Math.floor(state.score / 10));
        }
      }

      if (!gameOver) {
        state.gameLoop = requestAnimationFrame(gameLoop);
      }
    };

    state.gameLoop = requestAnimationFrame(gameLoop);

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
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
        width={600}
        height={200}
        className="border-2 border-border rounded-lg bg-background cursor-pointer"
        onClick={jump}
      />
      <div className="text-sm text-muted-foreground">
        Press SPACE or click to jump
      </div>
      {gameOver && (
        <Button onClick={resetGame} className="mt-2">
          Play Again
        </Button>
      )}
    </div>
  );
};

export default TRexGame;
