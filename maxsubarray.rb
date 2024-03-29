# Given an integer array nums, find the contiguous subarray (containing at least 
# one number) which has the largest sum and return its sum.

# A subarray is a contiguous part of an array.

# Example 1:
# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Example 2:
# Input: nums = [1]
# Output: 1
# Example 3:
# Input: nums = [5,4,-1,7,8]
# Output: 23
 
# Constraints:
# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104

def max_sub_array(nums)
    # i = 0
    # max= nums[i]
    # temp= 0
    # while i < nums.length
    #     j= i+1
    #     if nums[i] > max
    #         max= nums[i]
    #     end
    #     while j< nums.length
    #         if nums[i..j].sum > max
    #             max= nums[i..j].sum
    #         end
    #         j+=1
    #     end
    #     i+=1
    # end
    # return max

    prev = 0
    i=0
    max= nums[i]
    while i < nums.length
        prev + nums[i] > nums[i] ? prev = prev + nums[i] : prev = nums[i]
        max > prev ? max = max : max = prev
        i+=1
    end
    max
end

p max_sub_array([-2,1,-3,4,-1,2,1,-5,4])
p max_sub_array([-2, 1])