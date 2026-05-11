// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length + 1; j++) {
            if (nums[i] + nums[j] == target) {
                const arr2 = [i, j]
                return arr2
            }
        }
    }
};

//Using #map

var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
};