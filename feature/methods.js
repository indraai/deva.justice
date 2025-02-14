export default {
  /**************
  method: Legal
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
        global.push(`::begin:global:${item.key}:${item.id}`);
        for (let x in item) {
          global.push(`${x}: ${item[x]}`);
        }
        global.push(`::end:global:${item.key}:${this.lib.hash(item)}`);
      });
      const concerns = [];
      justice.concerns.forEach((item, index) => {
        concerns.push(`${index + 1}. ${item}`);
      })
      
      const info = [
        '::BEGIN:JUSTICE',
        '### Client',
        `::begin:client:${justice.client_id}`,
        `id: ${justice.client_id}`,
        `client: ${justice.client_name}`,
        '**concerns**',
        concerns.join('\n'),
        `::end:client:${this.lib.hash(justice)}`,
        '### Global',
        global.join('\n'),
        '::END:JUSTICE'
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
