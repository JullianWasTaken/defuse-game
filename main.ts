namespace SpriteKind {
    export const enemySpawn = SpriteKind.create()
    export const replacementBlock = SpriteKind.create()
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
// Konami code :>
controller.combos.attachCombo("uuddlrlrba", function () {
    game.splash("The cake is a lie!")
})
function killStreakReward () {
    killStreak = 0
    killStreakRequirement = killStreakRequirement + randint(2, 6)
    info.changeLifeBy(1)
}
function intro () {
    game.showLongText("The CIA has tasked you with defending an EMP bomb until detonation. You are controlling a robot remotely and shooting the enemy robots via \"B\" will kill them. Good luck agent.", DialogLayout.Bottom)
}
function lose () {
    game.over(false, effects.dissolve)
    pause(2000)
}
function animationStart () {
	
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile3`, function (sprite, location) {
    lose()
})
info.onCountdownEnd(function () {
    scene.cameraShake(5, 5000)
    pause(2000)
    game.over(true, effects.starField)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy(effects.trail, 500)
    music.powerDown.play()
    scene.cameraShake(4, 500)
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
let Robot: Sprite = null
let enemyAmount = 0
let projectile: Sprite = null
let killStreakRequirement = 0
let killStreak = 0
let yAcceleration = 0
let xAcceleration = 0
let User: Sprite = null
let bomb: Sprite = null
// used because the title thing takes too much space
intro()
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
let maxEnemy = 10
info.setLife(3)
info.setScore(0)
User.setPosition(143, 105)
info.startCountdown(randint(45, 240))
killStreak = 0
killStreakRequirement = 5
let enemySpeed = 20
game.onUpdate(function () {
    Robot.follow(bomb, enemySpeed)
})
forever(function () {
    if (User.vx < 0) {
        User.image.flipX()
    }
    controller.moveSprite(User, xAcceleration, yAcceleration)
    if (killStreak >= killStreakRequirement) {
        killStreakReward()
    }
})
game.onUpdateInterval(randint(5000, 30000), function () {
    if (enemyAmount < maxEnemy) {
        for (let index = 0; index < 3; index++) {
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
            Robot.y = randint(5, 150)
            Robot.x = 325
            enemyAmount += 1
        }
    } else {
        console.log("Too many enemies!")
    }
})
game.onUpdateInterval(20000, function () {
    enemySpeed += randint(1, 4)
})
