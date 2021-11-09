# Given an integer array nums, return true if any value appears at least twice
# in the array, and return false if every element is distinct.

# Example 1:
# Input: nums = [1,2,3,1]
# Output: true
# Example 2:
# Input: nums = [1,2,3,4]
# Output: false
# Example 3:
# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

def contains_duplicate(nums)
    # i = 0
    # while i< nums.length-1
    #     temp = nums.shift
    #     if nums.include?(temp)
    #         return true
    #     end
    # end
    # return false

    hash= Hash.new {|h, k| h[k]= 0}
    nums.each do |i|
        hash[i]+=1
    end
    hash.values.any? {|x| x >=2}
        
end

p contains_duplicate([4,2,3,1])