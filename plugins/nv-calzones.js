import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Calzones.mp3'
conn.sendFile(m.chat, vn, 'Calzones.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Calzones del admin|calzones del admin|calzones|Calzones|Calsones|calsones/
handler.command = new RegExp
export default handler
