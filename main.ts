basic.forever(function () {
    if (input.compassHeading() >= 45 && input.compassHeading() < 135) {
        basic.showString("E")
    } else if (input.compassHeading() >= 135 && input.compassHeading() < 215) {
        basic.showString("S")
    } else if (input.compassHeading() >= 225 && input.compassHeading() < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
