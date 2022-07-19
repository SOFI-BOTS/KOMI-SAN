import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐋𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍 𝐅𝐀𝐋𝐓𝐀𝐍𝐓𝐄, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐌𝐀𝐒 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄/𝐓𝐈𝐓𝐔𝐋𝐎 𝐃𝐄 𝐋𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐎 𝐒𝐈𝐄𝐍𝐓𝐎, 𝐍𝐎 𝐏𝐔𝐄𝐃𝐄 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐑 𝐄𝐋 𝐀𝐔𝐃𝐈𝐎/𝐕𝐈𝐃𝐄𝐎, 𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐂𝐎𝐍 𝐎𝐓𝐑𝐎 𝐍𝐎𝐌𝐁𝐑𝐄/𝐓𝐈𝐓𝐔𝐋𝐎*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}yta ${url}`],
['𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}ytv ${url}`],
['𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒', `${usedPrefix}playlist ${text}`]  
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐄𝐑𝐑𝐎𝐑, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
