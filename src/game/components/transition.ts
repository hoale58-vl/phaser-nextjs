import { Scene } from "phaser";

export function addScaleUpEffectOnSceneStart(
    scene: Phaser.Scene,
    gameObject: Phaser.GameObjects.GameObject
): Promise<void> {
    return new Promise((resolve) => {
        scene.events.on(Phaser.Scenes.Events.CREATE, () => {
            const propertyConfig = {
                ease: Phaser.Math.Easing.Expo.InOut,
                from: 0,
                start: 0,
                to: 2.5,
            };

            scene.tweens.add({
                duration: 1000,
                scaleX: propertyConfig,
                scaleY: propertyConfig,
                targets: gameObject,
                onComplete: () => {
                    resolve();
                },
            });
        });
    });
}

export function transition(scene: Scene) {
    // Transition In Effect Geometry Mask
    const { width, height } = scene.scale;
    const maskCircle = scene.add
        .circle(width / 2, height / 2, height / 2, 0x000000)
        .setVisible(false);

    const mask = maskCircle.createGeometryMask();
    scene.cameras.main.setMask(mask);

    addScaleUpEffectOnSceneStart(scene, maskCircle);
}

