
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: 'tinyurl',
  alias: ['tiny', 'shorten', 'short', 'shorturl'],
  react: '💘',
  desc: 'Shorten a URL using TinyURL.',
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
    if (!q) return reply('Please provide a URL to shorten.');
    
    await reply('> *Shortening URL...*');
    
    let apiUrl = '';
    if (q.includes('|')) {
      const [url, alias] = q.split('|').map(part => part.trim());
      apiUrl = `https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=${encodeURIComponent(url)}`;
    } else {
      apiUrl = `https://api.giftedtech.web.id/api/tools/shorturl?apikey=gifted&url=${encodeURIComponent(q)}`;
    }
    
    const response = await fetchJson(apiUrl);
    const result = response.result;
    
    await conn.sendMessage(m.chat, { text: result }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
