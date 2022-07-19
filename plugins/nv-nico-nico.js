import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Nico-nico.mp3'
conn.sendFile(m.chat, vn, 'Nico-nico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Nico nico|nico nico|Niko Niko|Niko niko|niko niko|nico|niko|Niko|nico|Nico/
handler.command = new RegExp
export default handler
