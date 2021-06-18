let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.DATABASE._data.chats[m.chat]
    if (chat.simi && !chat.isBanned) {
        let res = await fetch(global.API('vinz', '/api/simi', { text: m.text }, 'apikey')) //tinggal sesuaikan dengan rest api yang kamu pake
        let json = await res.json()
        if (json.status == true) {
            if (json.result == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('*Simi:* Follow! https://www.instagram.com/stikerinbot/')
            else await m.reply(`*Simi:* ${json.result}`)
        } else return m.reply(`*Simi:* Error!\n\nketik *#off simi*`)
        return !0
    }
    return true
}
module.exports = handler
