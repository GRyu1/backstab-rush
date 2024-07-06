import Phaser from "phaser";
import Field from "./scene/Field";
import Board from "./scene/Board";
import UI from "./scene/UI";
import Minimap from "./scene/Minimap";

const GameConfig = {
  type: Phaser.AUTO,
  parent: "game-container",
  backgroundColor: "#93cbee",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  autoFocus: true,
  scene: [Field, UI, Minimap, Board],
};

export default GameConfig;
