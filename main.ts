input.onButtonPressed(Button.A, function () {
    radio.sendString("Zachary and Oli sitting in a tree K I S S I N G")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 99999; index++) {
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(1234323)
