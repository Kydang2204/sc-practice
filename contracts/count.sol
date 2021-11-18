//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Count{
    uint private count = 0;
    function  get ()public view returns (uint){
         return count;
    }
    function inc() public {
        count++;
    }
    function des() public {
        count--;
    }
}
