export function emojiRandomizer(){
    const sendmsgemoji = document.querySelectorAll(".send-msg-emoji")
    const index = 2
    const emojis = [ 
        "fa-face-smile",
        "fa-face-tired",
        "fa-face-surprise",
        "fa-face-smile-wink",
        "fa-face-smile-beam",
        "fa-face-sad-tear",
        "fa-face-sad-cry",
        "fa-face-rolling-eyes",
        "fa-face-meh-blank",
        "fa-face-meh",
        "fa-face-laugh-wink",
        "fa-face-laugh-squint",
        "fa-face-laugh-beam",
        "fa-face-laugh",
        "fa-face-kiss-wink-heart",
        "fa-face-kiss-beam",
        "fa-face-kiss",
        "fa-face-grin-wink",
        "fa-face-grin-wide",
        "fa-face-grin-tongue-wink",
        "fa-face-grin-tongue-squint",
        "fa-face-grin-tongue",
        "fa-face-grin-tears",
        "fa-face-grin-stars",
        "fa-face-grin-squint-tears",
        "fa-face-grin-squint",
        "fa-face-grin-hearts",
        "fa-face-grin-beam-sweat",
        "fa-face-grin-beam",
        "fa-face-grin",
        "fa-face-grimace",
        "fa-face-frown-open",
        "fa-face-frown",
        "fa-face-flushed",
        "fa-face-dizzy",
        "fa-face-angry",
    ]

    const rnd = randomNumber(emojis.length)
    sendmsgemoji[index].classList.add(emojis[rnd])
}


function randomNumber(stop){
    return Math.floor(Math.random() * stop)
}