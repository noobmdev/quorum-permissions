// test/Box.test.js
// Load dependencies
const { expect } = require('chai');

// Load compiled artifacts
const PermissionsUpgradable = artifacts.require('PermissionsUpgradable');

// Start test block
contract('PermissionsUpgradable', function ([owner, account1, account2]) {
  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.permissionsUpgradable = await PermissionsUpgradable.new(owner);
  });

  // Test case
  it('check getGuardian', async function () {

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.permissionsUpgradable.getGuardian())).to.equal(owner);
    console.log("223")
  });
});