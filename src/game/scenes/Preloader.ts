import { Scene } from "phaser";
import { GAME_HEIGHT, GAME_WIDTH } from "../consts";
import { fadeOutScene } from "../components/fadeOutScene";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    const background = this.add.sprite(0, 0, "background").setOrigin(0);
    background.setScale(
      (GAME_WIDTH * 2) / background.width,
      (GAME_HEIGHT * 2) / background.height
    );

    this.children.sendToBack(background);

    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2 - 60, "logo").setScale(0.5);

    // Loading Scene
    const progressBox = this.add.graphics();
    const progressBar = this.add.graphics();
    progressBox.fillStyle(0xf89d59);
    progressBox.setDefaultStyles({
      lineStyle: {
        color: 0x000000,
        width: 5,
      },
      fillStyle: {
        color: 0xf89d59,
      },
    });

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const heightOffset = height / 2 + 110;
    progressBox.fillRoundedRect(width / 4, heightOffset, width / 2, 30, 20);
    progressBox.strokeRoundedRect(width / 4, heightOffset, width / 2, 30, 20);

    const loadingText = this.add
      .sprite(width / 2, height / 2 + 70, "loading-text")
      .setOrigin(0.5);

    this.load.on("progress", function (value: number) {
      progressBar.clear();
      progressBar.fillStyle(0xe66f24);
      if (value < 0.1) {
        progressBar.fillRoundedRect(
          width / 4,
          heightOffset + 2.5,
          (width / 2) * +0.1,
          25,
          12
        );
        return;
      }
      progressBar.fillRoundedRect(
        width / 4,
        heightOffset + 2.5,
        (width / 2) * +value,
        25,
        12
      );
    });

    this.load.on("complete", function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
    });

    ///// Load Assets
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");
    this.load.spritesheet("starBg", "BGSprite.png", {
      frameWidth: 405,
      frameHeight: 720,
    });

    // MainMenu
    this.load.image("MainMenu", "UI/MainMenu.png");
    this.load.image("PlayBtn", "UI/PlayBtn.png");
    this.load.image("XLogo", "UI/XLogo.png");
    this.load.image("TelegramLogo", "UI/TelegramLogo.png");
    this.load.image("WebsiteLogo", "UI/WebsiteLogo.png");

    // Fonts
    this.load.bitmapFont(
      "game-text",
      "Fonts/Fredoka-Regular.png",
      "Fonts/Fredoka-Regular.xml"
    );
    this.load.bitmapFont(
      "game-text-bold",
      "Fonts/Fredoka-Bold.png",
      "Fonts/Fredoka-Bold.xml"
    );
    this.load.bitmapFont(
      "game-text-bold-black",
      "Fonts/Fredoka-Bold-Black.png",
      "Fonts/Fredoka-Bold-Black.xml"
    );
  }

  create() {
    fadeOutScene(this, "MainMenu");
  }
}
