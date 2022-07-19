import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐋𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍 𝐅𝐀𝐋𝐓𝐀𝐍𝐓𝐄, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐌𝐀𝐒 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄/𝐓𝐈𝐓𝐔𝐋𝐎 𝐎 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐀𝐋𝐆𝐔𝐍𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍 𝐎 𝐕𝐈𝐃𝐄𝐎 𝐃𝐄 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 \n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n#play.1 Good Feeling - Flo Rida*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴀᴜᴅɪᴏ...⏳_*`, m)  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp3, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳Sᴇ ᴇsᴛᴀ ᴘʀᴏᴄᴇsᴀɴᴅᴏ Sᴜ ᴠɪᴅᴇᴏ...⏳_*`, m)
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.dlmp4, 'error.mp4', `_𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭_`, m)}
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐑𝐑𝐎𝐑, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
