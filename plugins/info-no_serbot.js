let handler = async (m, { conn, usedPrefix, command }) => {
 let name = conn.getName(m.sender)
 
 let txt = `
Hola ${name} 
𝙈𝙚 𝙦𝙪𝙚𝙧𝙞́𝙖𝙨 𝙩𝙧𝙖𝙞𝙘𝙞𝙤𝙣𝙖𝙧 𝙚 𝙘𝙪𝙡𝙚𝙧𝙤 𝙩𝙚 𝙫𝙤𝙮 𝙖 𝙥𝙖𝙧𝙩𝙞𝙧 𝙡𝙖 𝙢𝙖𝙙𝙧𝙚 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙣𝙤 𝙚𝙨𝙩𝙖́ 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 𝙥𝙖𝙧𝙖 𝙥𝙪𝙩@𝙨
    
𝙈𝙞𝙧𝙖 𝙚𝙨𝙩𝙚 𝙫𝙞𝙙𝙚𝙤 𝙥𝙖𝙧𝙖 𝙘𝙧𝙚𝙖𝙧 𝙩𝙪 𝙥𝙧𝙤𝙥𝙞𝙤 𝙗𝙤𝙩 ;-;
https://youtu.be/mCdA4bJAGGk`
    
     conn.sendHydrated(m.chat, txt, author, null, 'portal.acidicnodes.com', 'GitHub', null, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2']
    ], m)

} 

handler.command = ['serbot', 'jadibot'] 

export default handler

