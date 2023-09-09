// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SourceFunding {
    struct Grant {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] sponsors;
        uint256[] sponsorships;
    }

    mapping(uint256 => Grant) public grants;

    uint256 public numberOfGrants = 0;

    function createGrant(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Grant storage grant = grants[numberOfGrants];
        
        require(grant.deadline < block.timestamp, "The deadline should be a date in the future.");

        grant.owner = _owner;
        grant.title = _title;
        grant.description = _description;
        grant.target = _target;
        grant.deadline = _deadline;
        grant.amountCollected = 0;
        grant.image = _image;

        numberOfGrants++;

        return numberOfGrants - 1;
    }

    function sponsorGrant(uint256 _id) public payable {
        uint256 amount = msg.value;

        Grant storage grant = grants[_id];

        grant.sponsors.push(msg.sender);
        grant.sponsorships.push(amount);

        (bool sent,) = payable(grant.owner).call{value: amount}("");

        if(sent) {
            grant.amountCollected = grant.amountCollected + amount;
        }
    }

    function getSponsors(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (grants[_id].sponsors, grants[_id].sponsorships);
    }

    function getGrants() public view returns (Grant[] memory) {
        Grant[] memory allGrants = new Grant[](numberOfGrants);

        for(uint i = 0; i < numberOfGrants; i++) {
            Grant storage item = grants[i];

            allGrants[i] = item;
        }

        return allGrants;
    }


}