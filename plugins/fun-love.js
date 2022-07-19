let handler = async (m, { conn, command, text }) => {
let mr = `❤️❤️ MEDIDOR DE AMOR ❤️❤️
El amor de ${text} por ti es de ${Math.floor(Math.random() * 100)}% de un 100%
Deberias pedirle que sea tu  novia/o ?`
m.reply(mr, null, { mentions: conn.parseMention(mr) })
}

handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i

export default handler
