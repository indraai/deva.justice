"use strict";
// ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:71153924143258087294 LICENSE.md

// Justice Deva Test File


const {expect} = require('chai')
const JusticeDeva = require('./index.js');

describe(JusticeDeva.me.name, () => {
  beforeEach(() => {
    return JusticeDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(JusticeDeva).to.be.an('object');
    expect(JusticeDeva).to.have.property('agent');
    expect(JusticeDeva).to.have.property('vars');
    expect(JusticeDeva).to.have.property('listeners');
    expect(JusticeDeva).to.have.property('methods');
    expect(JusticeDeva).to.have.property('modules');
  });
})
