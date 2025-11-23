basic.forever(function () {
	
})
basic.forever(function () {
    if (input.lightLevel() >= 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.lightLevel() <= 100) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
    if (input.lightLevel() <= 70) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    if (input.lightLevel() <= 40) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
