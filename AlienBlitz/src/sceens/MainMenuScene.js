import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super('MainMenuScene');
    }

    create() {
        // メニューの作成（後で追加）
        this.scene.start('GameScene'); // とりあえず直接ゲームシーンを開始
    }
}
