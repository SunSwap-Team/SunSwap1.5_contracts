var factory = artifacts.require("./SunswapFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(factory);
};
