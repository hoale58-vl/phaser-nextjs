export function loadingSpinner(
    x: number,
    y: number,
    scene: Phaser.Scene
): Phaser.GameObjects.Container {
    const container = scene.add.container(x, y);
    // store the bars in a list for later
    const bars: Phaser.GameObjects.Rectangle[] = [];

    const radius = 64;
    const height = radius * 0.5;
    const width = 10;

    // the center of the loading animation
    const cx = 400;
    const cy = 300;

    // start at top
    let angle = -90;

    // create 12 bars each rotated and offset from the center
    for (let i = 0; i < 12; ++i) {
        const { x, y } = Phaser.Math.RotateAround(
            { x: cx, y: cy - (radius - height * 0.5) },
            cx,
            cy,
            Phaser.Math.DEG_TO_RAD * angle
        );

        // create each bar with position, rotation, and alpha
        const bar = scene.add
            .rectangle(x, y, width, height, 0xffffff, 1)
            .setAngle(angle)
            .setAlpha(0.2);

        bars.push(bar);

        // increment by 30 degrees for next bar
        angle += 30;
    }

    let index = 0;

    // save created tweens for reuse

    // create a looping TimerEvent
    scene.time.addEvent({
        delay: 70,
        loop: true,
        callback: () => {
            // make a new tween for the current bar
            const bar = bars[index];
            scene.tweens.add({
                targets: bar,
                alpha: 0.2,
                duration: 400,
                onStart: () => {
                    bar.alpha = 1;
                },
            });

            // increment and wrap around
            ++index;

            if (index >= bars.length) {
                index = 0;
            }
        },
    });

    container.add(bars);
    return container;
}

