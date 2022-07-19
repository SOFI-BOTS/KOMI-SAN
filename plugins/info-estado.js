let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './Menu2.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *𝓚𝓞𝓜𝓘 - 𝓢𝓐𝓝* ]
│ *➤ 𝐇𝐎𝐋𝐀 ${name}*
│
│ *ミ𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓彡*
│ *=> 𝐎𝐍𝐋𝐈𝐍𝐄 ✅*
│ *=> 𝐁𝐎𝐓 𝐃𝐄 𝐔𝐒𝐎 𝐏𝐔𝐁𝐋𝐈𝐂𝐎 ✅*
│ *=> 𝐓𝐈𝐄𝐌𝐏𝐎 𝐎𝐍𝐋𝐈𝐍𝐄: ${uptime}*
╰───────────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/SOFI-BOTS/KOMI-SAN', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
