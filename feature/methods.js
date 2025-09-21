"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:66900525171674101536 LICENSE.md

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
