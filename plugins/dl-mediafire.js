const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const axios = require("axios");





cmd({
  pattern: 'mediafirepro',
  desc: 'Download MediaFire files',
  category: 'download',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
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
    const text = body.trim().replace(command, '').trim();
    if (!text) return reply(`*Example*: ${command} https://www.mediafire.com/file/n6tgcrktbnov1oy/Queen_Anita-V4.zip/file`);

    await reply('> *Processing...*');

    const apiUrl = `https://api.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;

    try {
      const apiResponse = await axios.get(apiUrl);
      console.log('API response:', apiResponse);

      if (apiResponse.data && apiResponse.data.downloadLink) {
        const { fileName, mimeType, downloadLink } = apiResponse.data;

        await conn.sendMessage(m.chat, {
          document: { url: downloadLink },
          mimetype: mimeType,
          fileName: fileName,
          caption: `📦 *File Name:* ${fileName}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`
        }, { quoted: m });
      } else {
        reply(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
      }
    } catch (error) {
      console.error('Error fetching API response:', error);
      reply(`*Error fetching API response: ${error.message}*`);
    }
  } catch (error) {
    console.error('Error during MediaFire command:', error);
    reply(`*An error occurred while processing your request. Please try again later.*\n\nError details: ${error.message}\n${error.stack}`);
  }
});
