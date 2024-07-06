import Phaser from "phaser";
import MyPlayer from "./MyPlayer";

export type NavKeys = Phaser.Types.Input.Keyboard.CursorKeys;

export default class PlayerController extends Phaser.GameObjects.Zone {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    super(scene, x, y, width, height);

    scene.physics.add.existing(this);
  }

  update(player: MyPlayer, cursors: NavKeys) {
    if (!cursors) {
      return;
    }

    if (player.playerBehavior === "SITTING") {
      return;
    }

    const { x, y } = player;

    if (cursors.left?.isDown) {
      this.setPosition(x - 32, y);
    } else if (cursors.right?.isDown) {
      this.setPosition(x + 32, y);
    } else if (cursors.up?.isDown) {
      this.setPosition(x, y - 32);
    } else if (cursors.down?.isDown) {
      this.setPosition(x, y + 32);
    }
  }
}
