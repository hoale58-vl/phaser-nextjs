export function tintOnHover(
    object: Phaser.GameObjects.Sprite | Phaser.GameObjects.BitmapText
) {
    object
        .setInteractive({ useHandCursor: true })
        .on("pointerover", function () {
            object.setTint(0xdddddd);
            object.setTint(0xdddddd);
        })
        .on("pointerout", function () {
            object.setTint(0xffffff);
            object.setTint(0xffffff);
        });
    return object;
}

