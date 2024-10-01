export function flashOnHover(
    scene: Phaser.Scene,
    object: Phaser.GameObjects.Sprite
) {
    const tween = scene.tweens
        .add({
            targets: object,
            alpha: 0.5,
            ease: "Cubic.easeOut",
            duration: 500,
            repeat: -1,
            yoyo: true,
        })
        .pause();

    object
        .setInteractive({ useHandCursor: true })
        .on("pointerover", function () {
            tween.resume();
        })
        .on("pointerout", function () {
            object.setAlpha(1);
            tween.pause();
        });

    return object;
}

