sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    music.play(music.createSong(assets.song`my sound`), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`sundrop`)
let chost = sprites.create(assets.image`chost of homes`, SpriteKind.Player)
controller.moveSprite(chost)
chost.setStayInScreen(true)
chost.setBounceOnWall(true)
info.setScore(0)
info.setLife(4)
scene.setBackgroundColor(9)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
animation.runImageAnimation(
chost,
[img`
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 . . . . . . . . . . 
    . 3 3 3 3 3 3 3 . . . . . . . . 
    . 3 3 3 3 3 3 3 3 . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 5 5 3 5 5 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 f f f 3 3 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 . . . . . . . . . . 
    . 3 3 3 3 3 3 3 . . . . . . . . 
    . 3 3 3 3 3 3 3 3 . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 5 5 3 5 5 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 3 f f f 3 3 3 3 . . . 3 . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . 3 3 3 3 . . . . . . . . . . 
    . 3 3 3 3 3 3 3 . . . . . . . . 
    . 3 3 3 3 3 3 3 3 . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 5 5 3 5 5 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 . . . . 3 
    . . 3 3 f f f 3 3 3 3 . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
story.printText(":)", -50, -20)
story.printCharacterText("hi wellcome to the new update")
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`bader`, projectile, randint(-50, -50), randint(-50, -50))
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 4 
        . 4 d d 1 1 4 5 4 1 1 5 5 d 4 4 
        . 4 5 5 1 1 4 1 4 5 5 d d d 4 4 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 4 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 4 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, projectile2, randint(-50, -50), randint(-50, -50))
    projectile2.setKind(SpriteKind.Enemy)
})
