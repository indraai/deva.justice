export default {
  /**************
  method: justice
  params: packet
  describe: The global justice feature that installs with every agent
  ***************/
  async justice(packet) {
    const justice = await this.methods.sign('justice', 'default', packet);
    return justice;
  },
};
