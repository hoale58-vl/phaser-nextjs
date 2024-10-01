import { GameObjects, Scene } from "phaser";

import { EventBus } from "../EventBus";
import { GAME_HEIGHT, GAME_WIDTH } from "../consts";
import { background } from "../components/background";
import { tintOnHover } from "../components/tintOnHover";
import { transition } from "../components/transition";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  title: GameObjects.Text;
  logoTween: Phaser.Tweens.Tween | null;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = background(this);

    this.add.image(432, 856, "MainMenu");
    this.add.image(432, 741, "logo").setScale(3);
    tintOnHover(
      this.add
        .sprite(432, 1038, "PlayBtn")
        .setInteractive({ useHandCursor: true })
        .on("pointerup", () => {
          EventBus.emit("start", this);
        })
    );
    tintOnHover(
      this.add
        .sprite(255, 1194, "XLogo")
        .setInteractive({ useHandCursor: true })
        .on("pointerup", () => {
          window.open("https://x.com/HoaLe_58", "_blank");
        })
    );
    tintOnHover(
      this.add
        .sprite(432, 1194, "WebsiteLogo")
        .setInteractive({ useHandCursor: true })
        .on("pointerup", () => {
          window.open("https://github.com/hoale58-vl", "_blank");
        })
    );
    tintOnHover(
      this.add
        .sprite(606, 1194, "TelegramLogo")
        .setInteractive({ useHandCursor: true })
        .on("pointerup", () => {
          window.open("https://t.me/violet_058", "_blank");
        })
    );

    this.cameras.main.setBounds(0, 0, GAME_WIDTH * 2, GAME_HEIGHT * 2);
    this.cameras.main.setZoom(0.5);

    transition(this);

    EventBus.emit("current-scene-ready", this);
  }
}
