const fs = require('fs-extra')

exports.afkOn = (pushname, reason) => {
    return `AFk esta activado!!!\n\n➸ *Usuario*: ${pushname}\n➸ *Razon*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Afk ya esta activado.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Este men esta afk!\n➸ *Razon*: ${getReason}\n➸ *hace*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* Ya no esta Afk`
}