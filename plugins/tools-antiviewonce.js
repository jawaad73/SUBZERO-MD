/*

$$$$$$\            $$\                                               
$$  __$$\           $$ |                                              
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$$$$\  $$$$$$\   $$$$$$\   $$$$$$\  
\$$$$$$\  $$ |  $$ |$$  __$$\ \____$$  |$$  __$$\ $$  __$$\ $$  __$$\ 
 \____$$\ $$ |  $$ |$$ |  $$ |  $$$$ _/ $$$$$$$$ |$$ |  \__|$$ /  $$ |
$$\   $$ |$$ |  $$ |$$ |  $$ | $$  _/   $$   ____|$$ |      $$ |  $$ |
\$$$$$$  |\$$$$$$  |$$$$$$$  |$$$$$$$$\ \$$$$$$$\ $$ |      \$$$$$$  |
 \______/  \______/ \_______/ \________| \_______|\__|       \______/

Project Name : SubZero MD
Creator      : Darrell Mucheri ( Mr Frank OFC )
Repo         : https//github.com/mrfrank-ofc/SUBZERO-MD
Support      : wa.me/18062212660
*/

































































































































































































const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "vv",
    alias: ['retrive', "viewonce"],
    desc: "Fetch and resend a ViewOnce message content (image/video/voice).",
    category: "misc",
    use: '<query>',
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const quotedMessage = m.msg.contextInfo.quotedMessage; // Get quoted message

        if (quotedMessage && quotedMessage.viewOnceMessageV2) {
            const quot = quotedMessage.viewOnceMessageV2;
            if (quot.message.imageMessage) {
                let cap = quot.message.imageMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage);
                return conn.sendMessage(from, { image: { url: anu }, caption: cap }, { quoted: mek });
            }
            if (quot.message.videoMessage) {
                let cap = quot.message.videoMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage);
                return conn.sendMessage(from, { video: { url: anu }, caption: cap }, { quoted: mek });
            }
            if (quot.message.audioMessage) {
                let anu = await conn.downloadAndSaveMediaMessage(quot.message.audioMessage);
                return conn.sendMessage(from, { audio: { url: anu } }, { quoted: mek });
            }
        }

        // If there is no quoted message or it's not a ViewOnce message
        if (!m.quoted) return reply("Please reply to a ViewOnce message.");
        if (m.quoted.mtype === "viewOnceMessage") {
            if (m.quoted.message.imageMessage) {
                let cap = m.quoted.message.imageMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(m.quoted.message.imageMessage);
                return conn.sendMessage(from, { image: { url: anu }, caption: cap }, { quoted: mek });
            }
            else if (m.quoted.message.videoMessage) {
                let cap = m.quoted.message.videoMessage.caption;
                let anu = await conn.downloadAndSaveMediaMessage(m.quoted.message.videoMessage);
                return conn.sendMessage(from, { video: { url: anu }, caption: cap }, { quoted: mek });
            }
        } else if (m.quoted.message.audioMessage) {
            let anu = await conn.downloadAndSaveMediaMessage(m.quoted.message.audioMessage);
            return conn.sendMessage(from, { audio: { url: anu } }, { quoted: mek });
        } else {
            return reply("> *This is not a ViewOnce message.*");
        }
    } catch (e) {
        console.log("Error:", e);
        reply("An error occurred while fetching the ViewOnce message.");
    }
});


/*
const {
  cmd
} = require('../command');
cmd({
  'pattern': 'vv',
  'alias': ['vo', "viewonce"],
  'react': '✨',
  'desc': "Read ViewOnce messages",
  'category': 'download',
  'filename': __filename
}, async (_0xa6760d, _0x2ac286, _0x40dbfa, {
  from: _0x152889,
  quoted: _0x32230f,
  senderNumber: _0x4942d0,
  reply: _0x32bdbd
}) => {
  try {
    const _0x5f45fe = _0xa6760d.user.id.split(':')[0x0];
    if (_0x4942d0 !== _0x5f45fe) {
      return _0x32bdbd("> *Only Owner Can Use This Command 💗*");
    }
    const _0x40ab3a = _0x2ac286.msg.contextInfo?.["quotedMessage"]?.['viewOnceMessageV2'];
    if (_0x40ab3a) {
      if (_0x40ab3a.message.imageMessage) {
        console.log("Quoting a ViewOnce image");
        let _0x2ba55b = _0x40ab3a.message.imageMessage.caption;
        let _0xe55a21 = await _0xa6760d.downloadAndSaveMediaMessage(_0x40ab3a.message.imageMessage);
        return _0xa6760d.sendMessage(_0x2ac286.chat, {
          'image': {
            'url': _0xe55a21
          },
          'caption': _0x2ba55b
        });
      }
      if (_0x40ab3a.message.videoMessage) {
        console.log("Quoting a ViewOnce video");
        let _0x3aa464 = _0x40ab3a.message.videoMessage.caption;
        let _0x3466ab = await _0xa6760d.downloadAndSaveMediaMessage(_0x40ab3a.message.videoMessage);
        return _0xa6760d.sendMessage(_0x2ac286.chat, {
          'video': {
            'url': _0x3466ab
          },
          'caption': _0x3aa464
        });
      }
    }
  } catch (_0x123d87) {
    console.log("Error processing ViewOnce message:", _0x123d87);
    _0x32bdbd("An error occurred while processing the ViewOnce message.");
  }
  if (!_0x32230f) {
    return _0x32bdbd("Please reply to a ViewOnce message");
  }
  if (_0x32230f.mtype === "viewOnceMessage") {
    console.log("Processing a ViewOnce message");
    if (_0x32230f.message.imageMessage) {
      let _0x36f324 = _0x32230f.message.imageMessage.caption;
      let _0x19d83d = await _0xa6760d.downloadAndSaveMediaMessage(_0x32230f.message.imageMessage);
      return _0xa6760d.sendMessage(_0x2ac286.chat, {
        'image': {
          'url': _0x19d83d
        },
        'caption': _0x36f324
      });
    }
    if (_0x32230f.message.videoMessage) {
      let _0x4da410 = _0x32230f.message.videoMessage.caption;
      let _0x5b1b3f = await _0xa6760d.downloadAndSaveMediaMessage(_0x32230f.message.videoMessage);
      return _0xa6760d.sendMessage(_0x2ac286.chat, {
        'video': {
          'url': _0x5b1b3f
        },
        'caption': _0x4da410
      });
    }
  } else {
    return _0x32bdbd("This is not a ViewOnce message");
  }
});*/
