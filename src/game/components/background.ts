import { GameObjects, Scene } from "phaser";
import { GAME_HEIGHT, GAME_WIDTH } from "../consts";

export function background(scene: Scene): GameObjects.Image {
    scene.anims.create({
        key: "starBgAnim",
        frames: scene.anims.generateFrameNumbers("starBg", {
            start: 0,
            end: 149,
            first: 0,
        }),
        frameRate: 30,
        repeat: -1,
    });
    const background = scene.add
        .sprite(GAME_WIDTH, GAME_HEIGHT, "starBg")
        .play("starBgAnim");
    background.setScale(
        (GAME_WIDTH * 2) / background.width,
        (GAME_HEIGHT * 2) / background.height
    );
    return background;
}

