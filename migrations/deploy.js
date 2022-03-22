const Box = artifacts.require("Box");
const PermissionsUpgradable = artifacts.require("PermissionsUpgradable")

module.exports = function (deployer) {
  deployer.deploy(Box);
  deployer.deploy(PermissionsUpgradable);
  
};
