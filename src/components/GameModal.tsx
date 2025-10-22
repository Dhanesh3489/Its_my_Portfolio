import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TRexGame from "./games/TRexGame";
import SnakeGame from "./games/SnakeGame";

export const GameButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<"trex" | "snake" | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedGame(null);
  };

  return (
    <>
      <motion.div className="flex justify-center py-12">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg border-2 border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.6)] transition-all duration-300"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
        <span className="flex items-center gap-2">
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            🎮
          </motion.span>
          Take a Break – Play a Game!
        </span>
        </motion.button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Gamepad2 className="w-6 h-6" />
              {selectedGame ? "Playing Game" : "Choose Your Game"}
            </DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {!selectedGame ? (
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-2 gap-6 py-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedGame("trex")}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 cursor-pointer hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-center">🦖</div>
                  <h3 className="text-xl font-bold text-center mb-2">T-Rex Runner</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Jump over obstacles and survive as long as you can!
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedGame("snake")}
                  className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/30 cursor-pointer hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)] transition-all duration-300"
                >
                  <div className="text-6xl mb-4 text-center">🐍</div>
                  <h3 className="text-xl font-bold text-center mb-2">Snake Game</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Eat food, grow longer, and don't hit yourself!
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="game"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-6"
              >
                <div className="mb-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedGame(null)}
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
                    Back to Menu
                  </Button>
                </div>
                {selectedGame === "trex" ? <TRexGame /> : <SnakeGame />}
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameButton;
