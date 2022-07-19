let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙃𝙤𝙡𝙖 👋🏻, 𝙪𝙣𝙚𝙩𝙚 𝙖 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 𝙥𝙖𝙧𝙖 𝙥𝙖𝙨𝙖𝙧 𝙪𝙣 𝙧𝙖𝙩𝙤 𝙖𝙜𝙧𝙖𝙙𝙖𝙗𝙡𝙚 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝘽𝙤𝙩 𝙤 𝙥𝙡𝙖𝙩𝙞𝙘𝙖𝙣𝙙𝙤 𝙘𝙤𝙣 𝙡𝙖 𝙛𝙖𝙢𝙞𝙡𝙞𝙖 𝙙𝙚 𝙠𝙤𝙢𝙞 𝙨𝙖𝙣*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/FbXG07SGCKBIR8GfXpG5av
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
