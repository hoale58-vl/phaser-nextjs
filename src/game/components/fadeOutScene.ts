export const fadeOutScene = (currentScene: Phaser.Scene, newScene: string) => {
    currentScene.cameras.main.fadeOut(
        500,
        0,
        0,
        0,
        (_: any, progress: number) => {
            if (progress === 1) {
                currentScene.scene.start(newScene);
            }
        }
    );
};

