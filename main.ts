input.onButtonPressed(Button.A, function () {
    lauf_a = !(lauf_a)
    if (lauf_a) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 50)
    } else {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    }
})
input.onButtonPressed(Button.B, function () {
    lauf_b = !(lauf_b)
    if (lauf_b) {
        pins.servoWritePin(AnalogPin.P3, wink_0)
    } else {
        pins.servoWritePin(AnalogPin.P3, wink_1)
    }
})
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "A") {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "B") {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_B,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
let wink_1 = 0
let wink_0 = 0
let lauf_b = false
let lauf_a = false
radio.setGroup(54)
basic.showIcon(IconNames.Yes)
lauf_a = false
lauf_b = false
wink_0 = 45
wink_1 = 45
