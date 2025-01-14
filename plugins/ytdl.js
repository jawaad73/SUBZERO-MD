// Fuck you bro
// SUBZERO PROPERTY

function hi() {
  console.log("Hello World!");
}
hi();
function hi() {
  console.log("Hello World!");
}
hi();
// const more = String.fromCharCode(8206)
// const readMore = more.repeat(4001)

const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const {
  fetchJson
} = require('../lib/functions');
const axios = require("axios");
async function ytmp4(_0x3e70f9, _0x412a42) {
  try {
    if (!_0x3e70f9 || !_0x412a42) {
      throw new Error("url and format parameters are required.");
    }
    const _0x540cb9 = parseInt(_0x412a42.replace('p', ''), 0xa);
    const _0x54b505 = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x540cb9,
      'url': _0x3e70f9
    };
    const _0x4c259b = {
      'Accept': '*/*',
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': "cors",
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x911309 = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      'params': _0x54b505,
      'headers': _0x4c259b
    });
    const _0x19f26f = _0x911309.data.id;
    const _0x44cb3d = async () => {
      const _0x363ada = {
        'id': _0x19f26f
      };
      try {
        const _0x379689 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x363ada,
          'headers': _0x4c259b
        });
        const {
          progress: _0x480a29,
          download_url: _0xcf8017,
          text: _0x40f62e
        } = _0x379689.data;
        return _0x40f62e === "Finished" ? _0xcf8017 : (await new Promise(_0x1525a8 => setTimeout(_0x1525a8, 0x3e8)), _0x44cb3d());
      } catch (_0x264c3f) {
        throw new Error("Error in progress check: " + _0x264c3f.message);
      }
    };
    return await _0x44cb3d();
  } catch (_0x4288dc) {
    console.error("Error:", _0x4288dc);
    return {
      'error': _0x4288dc.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0xa744b2) {
  const _0x518adb = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0xc2a8a1 = _0xa744b2.match(_0x518adb);
  return _0xc2a8a1 ? _0xc2a8a1[0x1] : null;
}
function convertYouTubeLink(_0x1c105c) {
  const _0xc15f8f = extractYouTubeId(_0x1c105c);
  if (_0xc15f8f) {
    return "https://www.youtube.com/watch?v=" + _0xc15f8f;
  }
  return _0x1c105c;
}
cmd({
  'pattern': "song",
  'alias': ["play","ytmp3"],
  'desc': "To download songs.",
  'react': '🔎',
  'category': 'download',
  'filename': __filename
}, async (_0x3e819c, _0x481c78, _0x3e521e, {
  from: _0x4af58a,
  quoted: _0x561d31,
  body: _0x1756db,
  isCmd: _0x1543bc,
  command: _0x405d1e,
  args: _0x26823b,
  q: _0x1800d1,
  isGroup: _0x4c0299,
  sender: _0x1932af,
  senderNumber: _0x23f572,
  botNumber2: _0x35a342,
  botNumber: _0x302330,
  pushname: _0x19e590,
  isMe: _0x2abf50,
  isOwner: _0x1cf8c4,
  groupMetadata: _0x1cafc7,
  groupName: _0xbf0cc1,
  participants: _0x304c07,
  groupAdmins: _0x43a4ca,
  isBotAdmins: _0x220efc,
  isAdmins: _0x537346,
  reply: _0x5f07e9
}) => {
  try {
    if (!_0x1800d1) {
      return _0x5f07e9("Please give me a URL or title. Eg .play Lily By Alan Walker");
    }
    _0x1800d1 = convertYouTubeLink(_0x1800d1);
    const _0x1cde45 = await yts(_0x1800d1);
    const _0xdc4e9b = _0x1cde45.videos[0x0];
    const _0x371f03 = _0xdc4e9b.url;
    const _0x46b1d9 = await _0x3e819c.sendMessage(_0x4af58a, {
      'image': {
        'url': _0xdc4e9b.thumbnail
      },
      'caption': "\n *❄️ \`ＳＵＢＺＥＲＯ - ＭＤ\` ❄️*\n\n⟣━━━━━━━━━━━━━━━━━⟢\n*sᴜʙᴢᴇʀᴏ sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n⟣━━━━━━━━━━━━━━━━━⟢\n\n➣ *🎐sᴜʙᴢᴇʀᴏ ʙᴏᴛ ᴄʜᴀɴɴᴇʟ🎐*\n*https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D*\n\n⟣━━━━━━━━━━━━━━━━━━⟢\n> ℹ️ ʀᴇᴘʟʏ ᴡɪᴛʜ ɴᴜᴍʙᴇʀ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ғᴏʀᴍᴀᴛ\n\n*1   ┃ ᴀᴜᴅɪᴏ sᴏɴɢ 🎵*\n*2   ┃ ᴅᴏᴄᴜᴍᴇɴᴛ sᴏɴɢ 🗂️*\n\n> © 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 𝐖.𝐀 𝐁𝐎𝐓\n"
    }, {
      'quoted': _0x481c78
    });
    const _0x59ff4f = _0x46b1d9.key.id;
    _0x3e819c.ev.on("messages.upsert", async _0x1b6609 => {
      const _0x4858cf = _0x1b6609.messages[0x0];
      if (!_0x4858cf.message) {
        return;
      }
      const _0x5b3090 = _0x4858cf.message.conversation || _0x4858cf.message.extendedTextMessage?.["text"];
      const _0x1c883b = _0x4858cf.key.remoteJid;
      const _0x2565a6 = _0x4858cf.message.extendedTextMessage && _0x4858cf.message.extendedTextMessage.contextInfo.stanzaId === _0x59ff4f;
      if (_0x2565a6) {
        await _0x3e819c.sendMessage(_0x1c883b, {
          'react': {
            'text': '⬇️',
            'key': _0x4858cf.key
          }
        });
        const _0x2af4dd = await fetchJson("https://api.davidcyriltech.my.id/download/ytmp3?url=" + _0x371f03);
        const _0xf29be = _0x2af4dd.result.download_url;
        await _0x3e819c.sendMessage(_0x1c883b, {
          'delete': _0x46b1d9.key
        });
        await _0x3e819c.sendMessage(_0x1c883b, {
          'react': {
            'text': '⬆️',
            'key': _0x4858cf.key
          }
        });
        if (_0x5b3090 === '1') {
          await _0x3e819c.sendMessage(_0x1c883b, {
            'audio': {
              'url': _0xf29be
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': _0xdc4e9b.title,
                'body': _0xdc4e9b.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0xdc4e9b.url,
                'thumbnailUrl': _0xdc4e9b.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x4858cf
          });
          await _0x3e819c.sendMessage(_0x1c883b, {
            'react': {
              'text': '✅',
              'key': _0x4858cf.key
            }
          });
        } else if (_0x5b3090 === '2') {
          await _0x3e819c.sendMessage(_0x1c883b, {
            'document': {
              'url': _0xf29be
            },
            'mimetype': "audio/mp3",
            'fileName': _0xdc4e9b.title + '.mp3',
            'caption': "\n> © Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Sᴜʙᴢᴇʀᴏ ❤️\n"
          }, {
            'quoted': _0x4858cf
          });
          await _0x3e819c.sendMessage(_0x1c883b, {
            'react': {
              'text': '✅',
              'key': _0x4858cf.key
            }
          });
        }
      }
    });
  } catch (_0x3c6b09) {
    console.log(_0x3c6b09);
    _0x5f07e9('' + _0x3c6b09);
  }
});
cmd({
  'pattern': "video",
  'alias': "ytmp4",
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0x4c1c21, _0x1c9340, _0xc7dc28, {
  from: _0x16ca42,
  quoted: _0x486148,
  body: _0x2deb69,
  isCmd: _0x564bc4,
  command: _0xab0098,
  args: _0xbcdc8b,
  q: _0x23d2a3,
  isGroup: _0x492224,
  sender: _0x5ad6c0,
  senderNumber: _0x233689,
  botNumber2: _0x5d1c5d,
  botNumber: _0xa4cd7e,
  pushname: _0x4d5c47,
  isMe: _0xa167ac,
  isOwner: _0x5e243d,
  groupMetadata: _0x421b77,
  groupName: _0x348553,
  participants: _0xae2c54,
  groupAdmins: _0x5d03b8,
  isBotAdmins: _0x405dd3,
  isAdmins: _0x970778,
  reply: _0x29ec20
}) => {
  try {
    if (!_0x23d2a3) {
      return _0x29ec20("Please give me a URL or title.");
    }
    _0x23d2a3 = convertYouTubeLink(_0x23d2a3);
    const _0x5c95f8 = await yts(_0x23d2a3);
    const _0x3d981e = _0x5c95f8.videos[0x0];
    const _0x116315 = _0x3d981e.url;
    const _0x4f2be9 = await _0x4c1c21.sendMessage(_0x16ca42, {
      'image': {
        'url': _0x3d981e.thumbnail
      },
      'caption': "\n*❄️ＳＵＢＺＥＲＯ - ＭＤ❄️* \n\n┏━━━━━━━━━━━━━\n┃sᴜʙᴢᴇʀᴏ ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ✻\n┗━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━\n\n🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> sᴜʙᴢᴇʀᴏ ᴍᴅ✻\n"
    }, {
      'quoted': _0x1c9340
    });
    ;
    const _0x2b5ece = _0x4f2be9.key.id;
    _0x4c1c21.ev.on("messages.upsert", async _0x47968d => {
      const _0x323ae8 = _0x47968d.messages[0x0];
      if (!_0x323ae8.message) {
        return;
      }
      const _0x468498 = _0x323ae8.message.conversation || _0x323ae8.message.extendedTextMessage?.['text'];
      const _0x3567fe = _0x323ae8.key.remoteJid;
      const _0x43b8b6 = _0x323ae8.message.extendedTextMessage && _0x323ae8.message.extendedTextMessage.contextInfo.stanzaId === _0x2b5ece;
      if (_0x43b8b6) {
        await _0x4c1c21.sendMessage(_0x3567fe, {
          'react': {
            'text': '⬇️',
            'key': _0x323ae8.key
          }
        });
        if (_0x468498 === "1.1") {
          const _0x311eba = await ytmp4('' + _0x116315, "360p");
          await _0x4c1c21.sendMessage(_0x3567fe, {
            'delete': _0x4f2be9.key
          });
          await _0x4c1c21.sendMessage(_0x3567fe, {
            'react': {
              'text': '⬆️',
              'key': _0x323ae8.key
            }
          });
          await _0x4c1c21.sendMessage(_0x3567fe, {
            'video': {
              'url': _0x311eba
            },
            'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
          }, {
            'quoted': _0x323ae8
          });
          await _0x4c1c21.sendMessage(_0x3567fe, {
            'react': {
              'text': '✅',
              'key': _0x323ae8.key
            }
          });
        } else {
          if (_0x468498 === '1.2') {
            const _0x2d507a = await ytmp4('' + _0x116315, "480");
            await _0x4c1c21.sendMessage(_0x3567fe, {
              'delete': _0x4f2be9.key
            });
            await _0x4c1c21.sendMessage(_0x3567fe, {
              'react': {
                'text': '🔃',
                'key': _0x323ae8.key
              }
            });
            await _0x4c1c21.sendMessage(_0x3567fe, {
              'video': {
                'url': _0x2d507a
              },
              'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
            }, {
              'quoted': _0x323ae8
            });
            await _0x4c1c21.sendMessage(_0x3567fe, {
              'react': {
                'text': '✅',
                'key': _0x323ae8.key
              }
            });
          } else {
            if (_0x468498 === "1.3") {
              const _0x143e26 = await ytmp4('' + _0x116315, "720");
              await _0x4c1c21.sendMessage(_0x3567fe, {
                'delete': _0x4f2be9.key
              });
              await _0x4c1c21.sendMessage(_0x3567fe, {
                'react': {
                  'text': '⬆️',
                  'key': _0x323ae8.key
                }
              });
              await _0x4c1c21.sendMessage(_0x3567fe, {
                'video': {
                  'url': _0x143e26
                },
                'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
              }, {
                'quoted': _0x323ae8
              });
              await _0x4c1c21.sendMessage(_0x3567fe, {
                'react': {
                  'text': '✅',
                  'key': _0x323ae8.key
                }
              });
            } else {
              if (_0x468498 === "1.4") {
                const _0x1c9985 = await ytmp4('' + _0x116315, '1080');
                await _0x4c1c21.sendMessage(_0x3567fe, {
                  'delete': _0x4f2be9.key
                });
                await _0x4c1c21.sendMessage(_0x3567fe, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x323ae8.key
                  }
                });
                await _0x4c1c21.sendMessage(_0x3567fe, {
                  'video': {
                    'url': _0x1c9985
                  },
                  'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
                }, {
                  'quoted': _0x323ae8
                });
                await _0x4c1c21.sendMessage(_0x3567fe, {
                  'react': {
                    'text': '✅',
                    'key': _0x323ae8.key
                  }
                });
              } else {
                if (_0x468498 === "2.1") {
                  const _0x26ef1a = await ytmp4('' + _0x116315, "360");
                  await _0x4c1c21.sendMessage(_0x3567fe, {
                    'delete': _0x4f2be9.key
                  });
                  await _0x4c1c21.sendMessage(_0x3567fe, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x323ae8.key
                    }
                  });
                  await _0x4c1c21.sendMessage(_0x3567fe, {
                    'document': {
                      'url': _0x26ef1a
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x3d981e.title + ".mp4",
                    'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
                  }, {
                    'quoted': _0x323ae8
                  });
                  await _0x4c1c21.sendMessage(_0x3567fe, {
                    'react': {
                      'text': '✅',
                      'key': _0x323ae8.key
                    }
                  });
                } else {
                  if (_0x468498 === '2.2') {
                    const _0x71184a = await ytmp4('' + _0x116315, "480");
                    await _0x4c1c21.sendMessage(_0x3567fe, {
                      'delete': _0x4f2be9.key
                    });
                    await _0x4c1c21.sendMessage(_0x3567fe, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x323ae8.key
                      }
                    });
                    await _0x4c1c21.sendMessage(_0x3567fe, {
                      'document': {
                        'url': _0x71184a
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x3d981e.title + ".mp4",
                      'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
                    }, {
                      'quoted': _0x323ae8
                    });
                    await _0x4c1c21.sendMessage(_0x3567fe, {
                      'react': {
                        'text': '✅',
                        'key': _0x323ae8.key
                      }
                    });
                  } else {
                    if (_0x468498 === "2.3") {
                      const _0x331b97 = await ytmp4('' + _0x116315, "720");
                      await _0x4c1c21.sendMessage(_0x3567fe, {
                        'delete': _0x4f2be9.key
                      });
                      await _0x4c1c21.sendMessage(_0x3567fe, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x323ae8.key
                        }
                      });
                      await _0x4c1c21.sendMessage(_0x3567fe, {
                        'document': {
                          'url': _0x331b97
                        },
                        'mimetype': 'video/mp4',
                        'fileName': _0x3d981e.title + ".mp4",
                        'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
                      }, {
                        'quoted': _0x323ae8
                      });
                      await _0x4c1c21.sendMessage(_0x3567fe, {
                        'react': {
                          'text': '✅',
                          'key': _0x323ae8.key
                        }
                      });
                    } else {
                      if (_0x468498 === '2.4') {
                        const _0x1b0baf = await ytmp4('' + _0x116315, "1080");
                        await _0x4c1c21.sendMessage(_0x3567fe, {
                          'delete': _0x4f2be9.key
                        });
                        await _0x4c1c21.sendMessage(_0x3567fe, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x323ae8.key
                          }
                        });
                        await _0x4c1c21.sendMessage(_0x3567fe, {
                          'document': {
                            'url': _0x1b0baf
                          },
                          'mimetype': "video/mp4",
                          'fileName': _0x3d981e.title + '.mp4',
                          'caption': "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ SᴜʙZᴇʀᴏ🌟*\n"
                        }, {
                          'quoted': _0x323ae8
                        });
                        await _0x4c1c21.sendMessage(_0x3567fe, {
                          'react': {
                            'text': '✅',
                            'key': _0x323ae8.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x17ce02) {
    console.log(_0x17ce02);
    _0x29ec20('' + _0x17ce02);
  }
});
cmd({
  'pattern': "dee",
  'alias': 'dilolo',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x39aa3e, _0x2e5d77, _0x403146, {
  from: _0x49f651,
  q: _0xc978e2,
  reply: _0x4d1d75
}) => {
  try {
    if (!_0xc978e2) {
      return await _0x4d1d75("*Need a YouTube URL!*");
    }
    const _0x2b5760 = await dlyta(_0xc978e2);
    await _0x39aa3e.sendMessage(_0x49f651, {
      'audio': {
        'url': _0x2b5760.dl_link
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x2e5d77
    });
  } catch (_0x1532ae) {
    console.log("First attempt failed:", _0x1532ae);
    try {
      const _0xe0b80 = await dlyta(_0xc978e2);
      await _0x39aa3e.sendMessage(_0x49f651, {
        'audio': {
          'url': _0xe0b80.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x2e5d77
      });
    } catch (_0x3376c4) {
      console.log("Second attempt failed:", _0x3376c4);
      await _0x4d1d75("*Failed to process the request. Please try again later!*");
    }
  }
});v
