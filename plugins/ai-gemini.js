const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: "bot",
  alias: ["geminai","gpt"],
  react: "🤖",
  desc: "AI chat.",
  category: "main",
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
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.giftedtech.web.id/api/ai/geminiaipro?apikey=gifted&q=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GEMINI AI RESPONSE:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
