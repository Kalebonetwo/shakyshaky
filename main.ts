let Handshake = 0
input.onGesture(Gesture.Shake, function () {
    Handshake = randint(1, 3)
    if (Handshake == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            `)
        basic.showString("Scissors!")
    } else if (Handshake == 2) {
        basic.showIcon(IconNames.Square)
        basic.showString("Paper!")
    } else if (Handshake == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showString("rock!")
    }
})
