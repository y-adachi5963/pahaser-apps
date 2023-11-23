import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        // アセットのプリロード（後で追加）
    }

    create() {
        this.scene.start('MainMenuScene');
    }
}
