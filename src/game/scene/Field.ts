import Phaser, {Scene} from 'phaser';
import Network from '../network/Network';

class Field extends Scene {
    network!: Network
    private keyA!: Phaser.Input.Keyboard.Key
    private map!: Phaser.Tilemaps.Tilemap
    myPlayer!: MyPlayer
    private playerSelector!: Phaser.GameObjects.Zone
    private otherPlayers!: Phaser.Physics.Arcade.Group
    private otherPlayerMap = new Map<string, OtherPlayer>()
    private collidableObjects!: Phaser.Physics.Arcade.StaticGroup
  
    constructor() {
        super({key:'Field', active: true});
    }

    preload() {
        this.load.tilemapTiledJSON('map', 'assets/maps/map.json');
        this.load.spritesheet('adam', 'assets/character/adam.png', {
            frameWidth: 32,
            frameHeight: 48,
        })
        this.load.spritesheet('ash', 'assets/character/ash.png', {
            frameWidth: 32,
            frameHeight: 48,
        })
        this.load.spritesheet('lucy', 'assets/character/lucy.png', {
            frameWidth: 32,
            frameHeight: 48,
        })
        this.load.spritesheet('nancy', 'assets/character/nancy.png', {
            frameWidth: 32,
            frameHeight: 48,
        })
    }

    create() {
        if(!this.network.access){
            return;
        }
    }
}

export default Field;