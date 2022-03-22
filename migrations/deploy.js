const Box = artifacts.require("Box");
const PermissionsUpgradable = artifacts.require("PermissionsUpgradable")
const AccountManager = artifacts.require("AccountManager")
const NodeManager = artifacts.require("NodeManager")
const OrgManager = artifacts.require("OrgManager")
const PermissionsImplementation = artifacts.require("PermissionsImplementation")
const PermissionsInterface = artifacts.require("PermissionsInterface")
const RoleManager = artifacts.require("RoleManager")
const VoterManager = artifacts.require("VoterManager")

module.exports = function (deployer) {
  deployer.deploy(Box);
  deployer.deploy(PermissionsUpgradable);
  deployer.deploy(AccountManager);
  deployer.deploy(NodeManager);
  deployer.deploy(OrgManager);
  deployer.deploy(PermissionsImplementation);
  deployer.deploy(PermissionsInterface);
  deployer.deploy(RoleManager); 
  deployer.deploy(VoterManager);
};
