namespace SpriteKind {
    export const enemySpawn = SpriteKind.create()
    export const replacementBlock = SpriteKind.create()
    export const neutral = SpriteKind.create()
    export const explosionEndBlock = SpriteKind.create()
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
    music.pewPew.play()
    pause(shootingDelay)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (devTestChecker == true) {
        spawnEnemies()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.replacementBlock, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
// Konami code :>
controller.combos.attachCombo("uuddlrlrba", function () {
    developerTestMode()
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
}
function animationStart () {
	
}
info.onCountdownEnd(function () {
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
    timer.after(1800, function () {
        game.over(true, effects.starField)
    })
})
function spawnEnemyMain () {
    for (let index = 0; index <= 3; index++) {
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
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        Robot.setPosition(randint(101, 137), randint(6, scene.screenWidth()))
        distance = Math.sqrt((Robot.x - User.x) ** 2 + (Robot.y - User.y) ** 2)
        while (distance < 31) {
            Robot.setPosition(142, randint(6, 110))
        }
        Robot.follow(bomb, enemySpeed)
        enemyAmount += 1
    }
}
function spawnEnemies () {
    for (let index = 0; index < 3; index++) {
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
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        Robot.y = randint(5, 150)
        Robot.x = 325
        enemyAmount += 1
        pause(200)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setPosition(User.x + randint(10, 20), User.y + randint(10, 20))
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    music.powerDown.play()
    invincibilityAfterHit()
    User.say("Ow!")
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
let distance = 0
let boomBot: Sprite = null
let Robot: Sprite = null
let projectile: Sprite = null
let shootingDelay = 0
let enemySpeed = 0
let killStreakRequirement = 0
let killStreak = 0
let yAcceleration = 0
let xAcceleration = 0
let User: Sprite = null
let bomb: Sprite = null
let devTestChecker = false
devTestChecker = false
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
let maxEnemy = 15
info.setLife(3)
info.setScore(0)
User.setPosition(143, 105)
info.startCountdown(randint(5, 6))
killStreak = 0
killStreakRequirement = 5
enemySpeed = 40
shootingDelay = 200
game.onUpdate(function () {
    if (devTestChecker == true) {
        xAcceleration = 200
        yAcceleration = 200
    }
})
forever(function () {
    if (User.vx >= 1 || User.vx <= -1 || (User.vy >= 1 || User.vy <= -1)) {
        scene.cameraShake(2, 100)
    }
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
        spawnEnemyMain()
    } else {
        console.log("Too many enemies!")
    }
})
game.onUpdateInterval(20000, function () {
    enemySpeed += randint(1, 4)
})
