import Phaser from "phaser";
import Player from "./Player";

export default class MyPlayer extends Player {
  private playContainerBody: Phaser.Physics.Arcade.Body;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    id: string,
    frame?: string | number
  ) {
    super(scene, x, y, texture, id, frame);

    this.playContainerBody = this.playerContainer
      .body as Phaser.Physics.Arcade.Body;
  }

  
}
