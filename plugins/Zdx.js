/*const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const yts = require("yt-search");

cmd({
  pattern: 'play0',
  desc: 'Play a song from YouTube',
  category: 'music',
  filename: __filename
}, async (conn, mek, m, {
  text,
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
    if (!text) return reply(`*Example*: ${command} Faded by Alan Walker`);

    await reply('> *Processing...*');

    
    let search = await yts(text);
    let video = search.all[0];

    let body = `*QUEEN_ANITA-V4_MUSIC - PLAYER*\n` + 
    `> Title: *${video.title}*\n` + 
    `> Views: *${video.views}*\n` + 
    `> Duration: *${video.timestamp}*\n` + 
    `> Uploaded: *${video.ago}*\n` + 
    `> Url: *${video.url}*\n ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ`;

    await conn.sendMessage(m.chat, { image: { url: video.thumbnail }, caption: body }, { quoted: m });

    const apiResponse = await axios.get(`https://davidcyril-api.onrender.com/convert`, { params: { url: video.url, format: 'mp3' } });

    if (apiResponse.data.success) {
      const { downloadUrl } = apiResponse.data;
      await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mp4', fileName: `${video.title}.mp3`, caption: `🎧 *Here's your song:*\n> *Title:* ${video.title}` }, { quoted: m });
    } else {
      reply(`*Error fetching the song!*`);
    }
  } catch (error) {
    console.error('Error during play command:', error);
    reply(`*An error occurred while processing your request. Please try again later.*`);
  }
});
*/

/*//----+-++
cmd({
  pattern: 'wallpaper0',
  desc: 'Get a random wallpaper',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  text,
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
    if (!text) return reply(`*Usage:* ${command} <query>\n\n*Example:* ${command} Naruto`);

    await reply('> *Processing...*');

    const apiResponse = await axios.get(`https://davidcyril-api.onrender.com/wallpapers`, { params: { query: text } });

    if (apiResponse.status === 200 && apiResponse.data.success) {
      const wallpapers = apiResponse.data.data;

      if (wallpapers.length === 0) {
        return reply(`No wallpapers found for "${text}". Try another search term.`);
      }

      const maxResults = Math.min(wallpapers.length, 5);

      for (let i = 0; i < maxResults; i++) {
        await conn.sendMessage(m.chat, { image: { url: wallpapers[i].imageUrl }, caption: `🎨 *Wallpaper Search*\n\n📄 Query: "${text}"\n🖼 Wallpaper ${i + 1}/${maxResults}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ` }, { quoted: m });
      }
    } else {
      reply(`*ERROR!! MESSAGE :*\n\n> Failed to fetch wallpapers. Try again.`);
    }
  } catch (error) {
    console.error('Error in Wallpaper command:', error
*/
