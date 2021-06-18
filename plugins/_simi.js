let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.DATABASE._data.chats[m.chat]
    if (chat.simi && !chat.isBanned) {
        let res = await fetch(global.API('xteam', '/simsimi2', { kata: text }, 'APIKEY'))
        let json = await res.json()
        if (json.status) m.reply(json.result)
        else throw json
        } else return m.reply(`*Simi:* Error!\n\nketik *#off simi*`)
        return !0
    }
    return true
}
module.exports = handler
