var router = artifacts.require("./ValuesAggregator.sol");

const factory = artifacts.require("./SunswapFactory.sol")

module.exports = function(deployer) {
  deployer.deploy(router, factory.address);
};
