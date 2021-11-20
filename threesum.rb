# Given an integer array nums, return all the triplets [nums[i], nums[j], 
# nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + 
# nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

# Example 1:
# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Example 2:
# Input: nums = []
# Output: []
# Example 3:
# Input: nums = [0]
# Output: []

# Constraints:

# 0 <= nums.length <= 3000
# -105 <= nums[i] <= 105

def three_sum(nums)
    return [] if nums.length < 3
    result= []
    i= 0
    while i < nums.length-2
        j= i+1;
        while j < nums.length-1
            k= j+1
            while k < nums.length
                if nums[i] + nums[j] + nums[k] == 0
                    ans= [nums[i], nums[j], nums[k]].sort
                    result<< ans if !result.include?(ans)
                end
                k+=1
            end
            j+=1
        end
        i+=1
    end
    return result
end

p three_sum([-1,0,1,2,-1,-4])