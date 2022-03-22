// test/Box.test.js
// Load dependencies
const { expect } = require("chai");

// Load compiled artifacts
const PermissionsUpgradable = artifacts.require("PermissionsUpgradable");
const AccountManager = artifacts.require("AccountManager");
const NodeManager = artifacts.require("NodeManager");
const OrgManager = artifacts.require("OrgManager");
const PermissionsImplementation = artifacts.require(
  "PermissionsImplementation"
);
const PermissionsInterface = artifacts.require("PermissionsInterface");
const RoleManager = artifacts.require("RoleManager");
const VoterManager = artifacts.require("VoterManager");

// Start test block
contract("PermissionsUpgradable", function ([owner, account1, account2]) {
  before(async function () {
    // Deploy a new Box contract for each test
    this.permissionsUpgradable = await PermissionsUpgradable.new(owner);
    const results = await Promise.all([
      AccountManager.new(this.permissionsUpgradable.address),
      NodeManager.new(this.permissionsUpgradable.address),
      OrgManager.new(this.permissionsUpgradable.address),
      RoleManager.new(this.permissionsUpgradable.address),
      VoterManager.new(this.permissionsUpgradable.address),
      PermissionsInterface.new(this.permissionsUpgradable.address),
    ]);
    this.accountManager = results[0];
    this.nodeManager = results[1];
    this.orgManager = results[2];
    this.roleManager = results[3];
    this.voterManager = results[4];
    this.permissionsInterface = results[5];

    this.permissionsImplementation = await PermissionsImplementation.new(
      this.permissionsUpgradable.address,
      this.orgManager.address,
      this.roleManager.address,
      this.accountManager.address,
      this.voterManager.address,
      this.nodeManager.address
    );
    // this.accountManager = await AccountManager.new(this.permissionsUpgradable.address);
    // this.accountManager = await AccountManager.new(this.permissionsUpgradable.address);
  });

  // Test case
  it("getGuardian", async function () {
    console.log(this.permissionsImplementation);
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect(await this.permissionsUpgradable.getGuardian()).to.equal(owner);
  });
});
