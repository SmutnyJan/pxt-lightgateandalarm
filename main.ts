input.onButtonPressed(Button.A, function () {
    lightGate.calibrate(Deviation.Medium)
})
input.onButtonPressed(Button.B, function () {
    alarm.turnOffAlarmAndBroadcast()
})
lightGate.onLightLevelDrop(function () {
    alarm.turnOnAlarmAndBroadcast()
})
radio.setGroup(5)
