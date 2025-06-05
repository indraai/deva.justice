export default {
  /**************
  method: Justice
  params: packet
  describe: The global service feature that installs with every agent
  ***************/
  justice(packet) {
    this.context('feature');
    return new Promise((resolve, reject) => {
      const justice = this.justice();
      const agent = this.agent();
      const global = [];
      justice.global.forEach((item,index) => {
        global.push(`::begin:${item.key}:${item.id}`);
        for (let x in item) {
          global.push(`${x}: ${item[x]}`);
        }
        const thehash = this.lib.hash(item);
        global.push(`hash: ${thehash}`);
        global.push(`::end:${item.key}:${thehash}`);
      });
      const concerns = [];
      justice.concerns.forEach((item, index) => {
        concerns.push(`${index + 1}. ${item}`);
      })
      
      const info = [
        '::BEGIN:JUSTICE',
        `::begin:client`,
        '## Client',
        `id: ${justice.client_id}`,
        `client: ${justice.client_name}`,
        `::end:client}`,
        concerns.length ? `::begin:concerns` : '',
        concerns.length ? '## Concerns' : '',
        concerns.length ? concerns.join('\n') : '',
        concerns.length ? `::end:concerns` : '',
        '::begin:global',
        '## Global',
        global.join('\n'),
        '::end:global',
        '::END:JUSTICE',
      ].join('\n');
      this.question(`${this.askChr}feecting parse ${info}`).then(feecting => {
        return resolve({
          text: feecting.a.text,
          html: feecting.a.html,
          data: justice.concerns,
        });
      }).catch(err => {
        return this.error(err, packet, reject);
      })
    });
  },
};
