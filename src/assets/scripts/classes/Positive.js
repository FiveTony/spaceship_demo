import MovableObject from './MovableObject'
import PositiveObject from './PositiveObject'

export default class Positive extends Phaser.Physics.Arcade.Group {
    constructor(scene, config) {
        super(scene.physics.world, scene)
        this.scene = scene

        this.config = config

        this.countMax = this.config.maxPositiveOnLevel
        this.countCreated = 0

        this.timer = this.scene.time.addEvent({
            delay: Phaser.Math.Between(this.config.frequencyPositive[0], this.config.frequencyPositive[1]),
            loop: true,
            callback: this.tick,
            callbackScope: this
        })

    }
    createPositiveObject() {
        let positiveObject = this.getFirstDead()
        if (!positiveObject) {
            positiveObject = PositiveObject.generate(this.scene)
            MovableObject.lastX_P = positiveObject.x
            positiveObject.positive = true
            this.add(positiveObject)
        } else {
            positiveObject.reset()
        }

        positiveObject.move(this.config.velocity, this.config.isHorizontal, this.scene.countScorePositive)
        if (this.isRotation) positiveObject.setRotation()
        this.countCreated++
    }
    tick() {
        if (this.countCreated < this.countMax) {
            this.createPositiveObject()
            this.timer.delay -= this.scene.countScorePositive / 3
        } else {
            this.timer.remove()
        }
    }
}