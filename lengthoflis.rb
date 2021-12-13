=begin
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some
 or no elements without changing the order of the remaining elements. For 
 example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 
=end
require "byebug"

def length_of_lis(nums)
    list=[]
    i= 0
    while i  < nums.length #5
        list<< 1 #[1, 2, 1, 3, 3, 4]
        j=0
        while j< i
            # byebug
            if nums[j]< nums[i] #2, 3
                list[i] > list[j]+1 ? list[i] : list[i]= list[j]+1 #3 > 4
            end
            j+=1
        end
        i+=1
    end
    list.sort[-1]
end

p length_of_lis([0,1,0,3,2,3])
p length_of_lis([10,9,2,5,3,7,101,18])
p length_of_lis([7,7,7,7,7,7,7])