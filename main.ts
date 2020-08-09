radio.onReceivedValue(function (name, value) {
    if (name == "gauche") {
        pins.digitalWritePin(DigitalPin.P0, value)
    }
    if (name == "droite") {
        pins.digitalWritePin(DigitalPin.P1, value)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("gauche", 1)
        basic.showString("g")
    } else {
        radio.sendValue("gauche", 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("droite", 1)
        basic.showString("d")
    } else {
        radio.sendValue("droite", 0)
    }
})
