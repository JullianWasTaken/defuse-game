namespace SpriteKind {
    export const enemySpawn = SpriteKind.create()
    export const replacementBlock = SpriteKind.create()
    export const neutral = SpriteKind.create()
    export const explosionEndBlock = SpriteKind.create()
    export const scenery = SpriteKind.create()
    export const sceneryCarType = SpriteKind.create()
}
/**
 * Repeat blocks dont work for some reason :(
 */
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (initiatorChecker == true) {
        if (User.vx > 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . 4 . . . . . . 
                . . . . . 2 2 2 2 2 4 . . . . . 
                . . . . . . . . . 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, User, 100, randint(5, 15))
        } else if (User.vx < 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 . . . . . . . . . 
                . . . . . 4 2 2 2 2 2 . . . . . 
                . . . . . . 4 . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, User, -100, randint(5, 15))
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . 4 . . . . . . 
                . . . . . 2 2 2 2 2 4 . . . . . 
                . . . . . . . . . 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, User, 100, randint(5, 15))
        }
        music.pewPew.play()
        pause(shootingDelay)
    }
})
function storyStart () {
    // Serves to stop forever and gameUpdate functions till the initialization happens
    initiatorChecker = false
    if (initiatorChecker == false) {
        color.FadeToBlack.startScreenEffect(0)
        color.startFade(color.Black, color.originalPalette, 2500)
        story.startCutscene(function () {
            story.setSoundEnabled(true)
            effects.starField.startScreenEffect()
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
                ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
                fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
                fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
                fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
                ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
                f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
                ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
                ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
                fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
                fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
                ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
                fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
                fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
                ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
                ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
                fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
                ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
                bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
                bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
                bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
                bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
                3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
                333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
                cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
                cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
                cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
                cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
                bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
                bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
                dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
                dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
                dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
                ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
                ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
                ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
                ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
                d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
                333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
                33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
                33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
                d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
                ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
                b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
                bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
                bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
                b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
                dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
                dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
                dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
                dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
                3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
                33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                `)
            // Car
            sceneUtility1 = sprites.create(img`
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ........................................f.......................
                ....................................fffffffff...................
                ........................................f.......................
                ....................................fffffffff...................
                ........................................f.......................
                ....................................fffffffff...................
                ........................................f.......................
                ....................................fffffffff...................
                ........................................f.......................
                ....................................fffffffff...................
                ........................................f.......................
                ........................................f.......................
                ........................................f.......................
                ........................1111111111111111111111111111111111111...
                ......................111111111111111111111111111111111111111...
                ....................11111111111111111111111111111111111111111...
                ...................111111111111111111111111111111111111111111...
                ..................11111111111ffff111f1111fff11111111111111111...
                .................11111111111f1111111f111f111f1111111111111111...
                ................111ddddd1111f1111111f111f111f1111111111111111...
                ...............11ddddddd1111f1111111f111fffff1111111111111111...
                ..............11ddbbbbbb1111f1111111f111f111f1111111111111111...
                .............111bbbbbbbb1111f1111111f111f111f1111111111111111...
                ............11bbbbbbbbbd11111ffff111f111f111f1111111111111111...
                ...........11bccbbbbbbbd1111111111111111111111111111111111111...
                ..........11bcfcbbbbbbb11111111111111111111111111111111111111...
                ........111dcccbdddddd111111111111111111111111111111111111113...
                ......11111dcbdd111111dd11111111111111111111111111111111111d4...
                .....11111111111111111dd1111111111111111111111111111111111113...
                ...d11111111111111111111111111111111111111111111111111111111d...
                ..d1d111111111111111111111111111111111111111111111111111111db...
                ..dddd111ddd1111111111111111111111111111111111111dd11111111de...
                ..ddbd1dbbccbdddddddddddddddddddddddddddddddddddbccbddddddddee..
                ..bbbbdbcfffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffccbbbbbbee..
                ..cccccfffcfffccccccccccccccccccccccccccccccccfffccfffcccccccc..
                ..ccccfffccccffcccccccccccccccccccccccccccccccffccccffcccccccc..
                ..ccccffcccccffccccccccccccccccccccccccccccccffccccccffccccccc..
                ...cccffcccccffccccccccccccccccccccccccccccccffccccccffcccc.....
                ......ffcccccffccccccccccccccccccccccccccccccfffccccfff.........
                .......ffcccfff...............................fffccfff..........
                ........ffffff.................................ffffff...........
                .........fff.....................................fff............
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                ................................................................
                `, SpriteKind.scenery)
            sceneUtility1.setPosition(190, 93)
            sceneUtility1.startEffect(effects.spray)
            story.spriteMoveToLocation(sceneUtility1, 60, 89, 20)
            intro()
            sceneUtility2 = sprites.create(assets.image`Temporary asset0`, SpriteKind.scenery)
            sceneUtility2.setPosition(60, 95)
            sceneUtility2.z = -5
            story.spriteMoveToLocation(sceneUtility2, 111, 95, 10)
            effects.clearParticles(sceneUtility1)
            pause(1000)
            sceneUtility2.say("Let's do this.", 1000)
            color.FadeToBlack.startScreenEffect(2000)
            pause(1000)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . 4 . . . . . . 
                . . . . . 2 2 2 2 2 4 . . . . . 
                . . . . . . . . . 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, sceneUtility2, 100, randint(5, 15))
            music.pewPew.play()
            pause(500)
            // Put this in start cutscene block
            effects.starField.endScreenEffect()
        })
    }
    story.startCutscene(function () {
        color.startFade(color.Black, color.originalPalette)
        effects.starField.endScreenEffect()
        tiles.destroySpritesOfKind(SpriteKind.scenery)
        tiles.destroySpritesOfKind(SpriteKind.Projectile)
    })
    story.startCutscene(function () {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        initiatorChecker = true
        initialize()
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (initiatorChecker == true && devTestChecker == true) {
        spawnEnemyMain()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.replacementBlock, function (sprite, otherSprite) {
    sprite.destroy()
    music.zapped.play()
    game.splash("A robot touched the EMP!")
    info.changeLifeBy(-1)
})
// Konami code :>
controller.combos.attachCombo("uuddlrlrba", function () {
    if (initiatorChecker == true) {
        developerTestMode()
    }
})
function killStreakReward () {
    killStreak = 0
    killStreakRequirement = killStreakRequirement + randint(2, 6)
    info.changeLifeBy(1)
}
function intro () {
    story.printDialog("The CIA has tasked you with defending an EMP bomb until detonation.", 80, 35, 50, 150)
    story.printDialog("You are controlling a robot remotely and shooting the enemy robots via \"B\" will kill them.", 80, 35, 50, 150)
    story.printDialog("Good luck agent.", 80, 35, 50, 150)
}
function lose () {
    game.over(false, effects.dissolve)
}
info.onCountdownEnd(function () {
    allNeutralEnd = true
    Robot.setKind(SpriteKind.neutral)
    User.setKind(SpriteKind.neutral)
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        boomBot = sprites.create(img`
            c c c c c c c c c c c c c c c c 
            c b b b b b b b b b b b b b b c 
            c b c c b b b b b b b b 4 b b c 
            c b c b b 4 4 b b b b b 4 b b c 
            c b b b b 4 b b b 4 4 4 4 4 b c 
            c b b 4 b b b b b 4 4 4 b 4 b c 
            c b b 4 b b b b b 4 4 4 b 4 b c 
            c b b b 4 4 b b b b 4 b b 4 b c 
            c b b b 4 b b 4 b 4 4 b b b b c 
            c b b 4 b b 4 4 b b 4 b b b b c 
            c b b 4 4 4 4 b b b 4 b b b b c 
            c b b b 4 b 4 4 b 4 4 4 b b b c 
            c b b 4 4 4 4 b b 4 b 4 4 c b c 
            c b b b b b b b b b b b c c b c 
            c b b b b b b b b b b b b b b c 
            c c c c c c c c c c c c c c c c 
            `, SpriteKind.explosionEndBlock)
        scene.cameraFollowSprite(boomBot)
        tiles.placeOnTile(boomBot, value)
        boomBot.destroy(effects.fire, 500)
    }
    scene.cameraShake(50, 7000)
    music.bigCrash.play()
    story.startCutscene(function () {
        color.FadeToBlack.startScreenEffect(4000)
        color.clearFadeEffect()
        timer.after(5000, function () {
            game.over(true, effects.starField)
        })
    })
})
function spawnEnemyMain () {
    Robot = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdb2dd2bdbf......
        fff...fcdc3113cdcf...fff
        ..f....fb111111bf....f..
        ..f...fffcdb1bdffff..f..
        ..fffc111cbfbfc111cffff.
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Robot.setPosition(randint(160, 180), randint(6, 110))
    Robot.follow(bomb, enemySpeed)
}
function initialize () {
    devTestChecker = false
    tiles.setTilemap(tilemap`level1`)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
        bomb = sprites.create(img`
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . f 8 8 2 2 8 8 8 8 8 8 8 8 f . 
            . f 8 2 2 2 2 8 8 8 8 8 8 8 f . 
            . f 8 2 2 2 2 8 8 8 8 8 8 8 f . 
            . f 8 2 2 2 2 8 8 8 8 8 8 8 f . 
            . f 8 8 2 2 8 8 8 8 8 8 8 8 f . 
            . f 8 8 8 8 8 8 8 8 8 8 8 8 f . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . f 8 8 8 8 8 8 8 8 8 8 f . . 
            . . . f 8 8 8 8 8 8 8 8 f . . . 
            . . . . f f 8 8 8 8 f f . . . . 
            . . . . . . f f f f . . . . . . 
            `, SpriteKind.replacementBlock)
        tiles.placeOnTile(bomb, value2)
        tiles.setTileAt(value2, assets.tile`myTile4`)
    }
    User = sprites.create(img`
        ................
        ................
        ................
        ................
        .......ff.......
        ....bbbbbbbb....
        ....bffffffb....
        ....bf8ff8fb....
        ....bf8ff8fb....
        ....bffffffb....
        ....bffffffb....
        ....bbbbbbbb....
        ...bffffffffb...
        ...bffffffffb...
        ..fbffcffcffbf..
        .f.bffffffffb.f.
        .f.bffffffffb.f.
        .f.bffcffcffb.f.
        .f.bffffffffb.f.
        .f.bffffffffb.f.
        ...bffcffcffb...
        ...bffffffffb...
        ...bffffffffb...
        ...bbbbbbbbbb...
        .....f....f.....
        .....f....f.....
        .....f....f.....
        .....f....f.....
        ....fff..fff....
        ....fff..fff....
        ................
        ................
        `, SpriteKind.Player)
    xAcceleration = 100
    yAcceleration = 100
    scene.cameraFollowSprite(User)
    maxEnemy = 15
    info.setLife(3)
    info.setScore(0)
    User.setPosition(45, 78)
    info.startCountdown(randint(45, 80))
    killStreak = 0
    killStreakRequirement = 5
    enemySpeed = 40
    shootingDelay = 200
    pause(2000)
}
// for (let index = 0; index < 3; index++) {
// Robot = sprites.create(img`
// ........................
// ........................
// ........................
// ........................
// ..........ffff..........
// ........ff1111ff........
// .......fb111111bf.......
// .......f11111111f.......
// ......fd11111111df......
// ......fd11111111df......
// ......fddd1111dddf......
// ......fbdbfddfbdbf......
// ......fcdcf11fcdcf......
// .......fb111111bf.......
// ......fffcdb1bdffff.....
// ....fc111cbfbfc111cf....
// ....f1b1b1ffff1b1b1f....
// ....fbfbffffffbfbfbf....
// .........ffffff.........
// ...........fff..........
// ........................
// ........................
// ........................
// ........................
// `, SpriteKind.Enemy)
// Robot.y = randint(5, 150)
// Robot.x = 325
// enemyAmount += 1
// pause(200)
// }
function spawnEnemies () {
	
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    music.powerDown.play()
    invincibilityAfterHit()
    User.say("Ow!", 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    sprite.x = User.x + 6
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    User.setPosition(143, 105)
    game.splash("Do not go out of the map!")
})
info.onLifeZero(function () {
    lose()
})
function invincibilityAfterHit () {
    for (let index = 0; index < 2; index++) {
        User.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        pause(50)
        User.setImage(assets.image`Temporary asset0`)
    }
    pause(200)
}
function developerTestMode () {
    info.stopCountdown()
    User.say("Developer test mode enabled!")
    info.setLife(5000)
    User.setKind(SpriteKind.neutral)
    shootingDelay = 0
}
function destroyScenery () {
    for (let value of sprites.allOfKind(SpriteKind.scenery)) {
        value.destroy()
    }
}
// Delete enemy :D
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    // speed boost after every kill
    if (xAcceleration < 149 && yAcceleration < 149) {
        xAcceleration = 150
        yAcceleration = 150
        pause(500)
        xAcceleration = 100
        yAcceleration = 100
    }
    music.powerUp.play()
    info.changeScoreBy(1)
    killStreak += 1
    enemyAmount += -1
    scene.cameraShake(2, 100)
})
let enemyAmount = 0
let maxEnemy = 0
let yAcceleration = 0
let xAcceleration = 0
let enemySpeed = 0
let bomb: Sprite = null
let boomBot: Sprite = null
let Robot: Sprite = null
let allNeutralEnd = false
let killStreakRequirement = 0
let killStreak = 0
let devTestChecker = false
let sceneUtility2: Sprite = null
let sceneUtility1: Sprite = null
let shootingDelay = 0
let projectile: Sprite = null
let User: Sprite = null
let initiatorChecker = false
storyStart()
game.onUpdate(function () {
    if (allNeutralEnd == true) {
        Robot.setKind(SpriteKind.neutral)
        User.setKind(SpriteKind.neutral)
    }
})
game.onUpdate(function () {
    if (initiatorChecker == true) {
        if (devTestChecker == true) {
            xAcceleration = 200
            yAcceleration = 200
        }
    }
})
forever(function () {
    if (initiatorChecker == true) {
        if (User.vx < 0) {
            User.image.flipX()
        }
        controller.moveSprite(User, xAcceleration, yAcceleration)
        if (killStreak >= killStreakRequirement) {
            killStreakReward()
        }
    }
})
forever(function () {
    if (initiatorChecker == true) {
        if (User.vx >= 1 || User.vx <= -1 || (User.vy >= 1 || User.vy <= -1)) {
            scene.cameraShake(2, 100)
        }
    }
})
game.onUpdateInterval(randint(5000, 30000), function () {
    if (initiatorChecker == true) {
        spawnEnemyMain()
    }
})
game.onUpdateInterval(20000, function () {
    if (initiatorChecker == true) {
        enemySpeed += randint(2, 5)
    }
})
