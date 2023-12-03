// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

interface IStakingXSP {
    function mint(address _to, uint256 _amount) external;

    function burn(address _from, uint256 _amount) external;

    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}