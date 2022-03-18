require("./node_modules/phaser/src/polyfills");

import CONST from "./node_modules/phaser/src/const";
import Extend from "./node_modules/phaser/src/utils/object/Extend";

/**
 * @namespace Phaser
 */

var Phaser = {
  Cameras: {
    Scene2D: require("./node_modules/phaser/src/cameras/2d"),
  },
  Core: require("./node_modules/phaser/src/core"),
  Events: require("./node_modules/phaser/src/events/index"),
  Game: require("./node_modules/phaser/src/core/Game"),
  GameObjects: require("./node_modules/phaser/src/gameobjects"),
  Input: require("./node_modules/phaser/src/input"),
  Loader: require("./node_modules/phaser/src/loader"),
  Math: {
    Between: require("./node_modules/phaser/src/math/Between"),
  },
  // DOM: require("./node_modules/phaser/src/dom"),
  Physics: require("./node_modules/phaser/src/physics"),
  Plugins: require("./node_modules/phaser/src/plugins"),
  Scene: require("./node_modules/phaser/src/scene/Scene"),
  Scenes: require("./node_modules/phaser/src/scene"),
  Scale: require("./node_modules/phaser/src/scale"),
  ScaleModes: require("./node_modules/phaser/src/renderer/ScaleModes"),
  Time: require("./node_modules/phaser/src/time"),
  Tweens: require("./node_modules/phaser/src/tweens"),
  Textures: require("./node_modules/phaser/src/textures"),
  // Utils: require("./node_modules/phaser/src/utils"),
};

Phaser = Extend(false, Phaser, CONST); //  Merge in the consts

export default Phaser; //  Export it
global.Phaser = Phaser;
