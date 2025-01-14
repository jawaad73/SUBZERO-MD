
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson, fetchBuffer } = require('../lib/functions');

cmd({
  pattern: 'qrcode',
  alias: ['qr'],
  react: '‍🩹',
  desc: 'Generate a QR code.',
  category: 'main',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply('Please provide text to generate QR code.');

    await reply('> *Generating QR code...*');

    // GET Method
     const response = await fetchJson(`https://api.giftedtech.web.id/api/tools/createqr?apikey=gifted&text=${encodeURIComponent(q)}`);
    const imageUrl = response.result;

    // BUFFER Method
  //  const response = await fetchBuffer(`https://api.giftedtech.web.id/api/tools/createqr?apikey=gifted&text=${encodeURIComponent(q)}`);
    await conn.sendMessage(m.chat, { image: response }, { quoted: m, caption: 'QR Code' });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
