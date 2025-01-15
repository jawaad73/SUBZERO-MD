


const { Buttons, List } = require('whatsapp-web.js');

const cmd = {
  pattern: 'testbuttons',
  desc: 'Test WhatsApp buttons',
  category: 'test',
  filename: __filename
};

cmd.command = async (m, client) => {
  const button = new Buttons('Button Test', [
    { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
    { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
  ], 'Button Body', 'footer');

  client.sendMessage(m.from, button)
    .then((res) => {
      console.log('Button sent:', res);
    })
    .catch((err) => {
      console.error('Error sending button:', err);
    });

  const list = new List('List Test', 'List Body', 'footer', [
    { title: 'Option 1', description: 'Description 1' },
    { title: 'Option 2', description: 'Description 2' }
  ], 'listSelectionText');

  client.sendMessage(m.from, list)
    .then((res) => {
      console.log('List sent:', res);
    })
    .catch((err) => {
      console.error('Error sending list:', err);
    });
};

module.exports = cmd;
