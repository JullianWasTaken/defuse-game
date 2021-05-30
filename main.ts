namespace SpriteKind {
    export const enemySpawn = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
// To prevent spawncamping of enemies
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemySpawn, function (sprite, otherSprite) {
    User.setPosition(143, 105)
    game.showLongText("Don't stand on enemy spawns!", DialogLayout.Bottom)
})
function intro () {
    game.showLongText("The CIA has tasked you with defending an EMP bomb until detonation. You are controlling a robot remotely and touching the enemy robots will kill them. Good luck agent.", DialogLayout.Bottom)
}
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
info.onLifeZero(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        endExplosionBlock = sprites.create(img`
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
            `, SpriteKind.Player)
        endExplosionBlock.startEffect(effects.fire)
    }
    game.over(false, effects.dissolve)
})
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
})
let Robot: Sprite = null
let endExplosionBlock: Sprite = null
let projectile: Sprite = null
let yAcceleration = 0
let xAcceleration = 0
let User: Sprite = null
// used because the title thing takes too much space
intro()
tiles.setTilemap(tilemap`level1`)
User = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............ff.fffff..........
    .............f11f11111fff.......
    ...........ff11ff11111111f......
    ..........f11111f111d1111f......
    ..........1111111111dd111f......
    ..........f11111111d88df1f......
    ...........f111dd1d81fdff.......
    ............fffdb1dd1fdf........
    ...............fd1dbdddf........
    ..............ffffdddddff.......
    ..............ff96fdbddfef......
    ..............f666ffddfecf......
    ..............f99699fffff.......
    ..............ff999969fff.......
    ..............f9666999fddf......
    ..............f9699ff9fbdf......
    ...............ffff88ffff.......
    .................f88f...........
    .................f88f...........
    ................ff8cf...........
    ................f88cf...........
    ...............ff86ccff.........
    ...............f696966f.........
    ...............ffffffff.........
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
xAcceleration = 100
yAcceleration = 100
scene.cameraFollowSprite(User)
let maxEnemy = 10
info.setLife(3)
info.setScore(0)
User.setPosition(143, 105)
info.startCountdown(randint(45, 240))
game.onUpdate(function () {
    if (User.vx < 0) {
        User.image.flipX()
    }
    controller.moveSprite(User, xAcceleration, yAcceleration)
    Robot.follow(User)
})
game.onUpdateInterval(randint(10000, 40000), function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Robot = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 . 2 2 2 2 . 2 2 2 . . 
            2 . . . 2 . 2 . . 2 . 2 . . . . 
            2 2 2 2 2 . 2 . . 2 . 2 2 2 . . 
            2 . . . . . 2 . . 2 . 2 . . . . 
            2 2 2 2 2 . 2 . . 2 . 2 2 2 2 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 . . 2 2 . . 2 . . 2 . . . 
            . 2 . 2 2 . 2 . . 2 2 2 2 . . . 
            . 2 . . . . 2 . . . . . 2 . . . 
            . 2 . . . . 2 . . . . . 2 . . . 
            . 2 . . . . 2 . . 2 . . 2 . . . 
            . 2 . . . . 2 . . 2 2 2 2 . . . 
            . . . . . . 2 . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Robot, value)
    }
})
