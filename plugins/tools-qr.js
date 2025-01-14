
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchBuffer } = require('../lib/functions');

cmd({
  pattern: 'qrcode',
  alias: ['qr'],
  react: '💛',
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

    const response = await fetchBuffer(`https://api.giftedtech.web.id/api/tools/createqr?apikey=gifted&text=${encodeURIComponent(q)}`, { timeout: 10000 });

    if (!response) {
      throw new Error('Failed to retrieve QR code image');
    }

    const base64Image = `data:image/png;base64,${response.toString('base64')}`;

    await conn.sendMessage(m.chat, { image: { url: base64Image } }, { quoted: m, caption: 'QR Code' });
    await reply('> *QR code generated successfully!*');
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
