# Given an integer array nums, return an array answer such that answer[i] is equal
#  to the product of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# You must write an algorithm that runs in O(n) time and without using the 
# division operation.

# Example 1:
# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]
# Example 2:
# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]
 
# Constraints:
# 2 <= nums.length <= 105
# -30 <= nums[i] <= 30
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
# integer.
 
# Follow up: Can you solve the problem in O(1) extra space complexity? 
# (The output array does not count as extra space for space complexity analysis.)

def product_except_self(nums)
    hash= Hash.new {|h, k| h[k]=0}
    nums.each do |num|
       hash[num]+=1 
    end
    i=0
    while i< nums.length
        temp= hash.dup
        temp[nums[i]]-=1
        a = []
        temp= temp.reject {|k,v| v===0}
        temp.each {|k, v| a<< k**v}
        nums[i]=a.inject(:*)
        i+=1
    end
    nums
end

p product_except_self([-1,1,0,-3,3])
p product_except_self([5,9,2,-9,-9,-7,-8,7,-9,10])