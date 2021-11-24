# Given n non-negative integers a1, a2, ..., an , where each represents a point
#  at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
#   of the line i is at (i, ai) and (i, 0). Find two lines, which, together with
#    the x-axis forms a container, such that the container contains the most
#     water.

# Notice that you may not slant the container.

# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
# Example 2:
# Input: height = [1,1]
# Output: 1
# Example 3:
# Input: height = [4,3,2,1,4]
# Output: 16
# Example 4:
# Input: height = [1,2,1]
# Output: 2
 

# Constraints:

# n == height.length
# 2 <= n <= 105
# 0 <= height[i] <= 104

def max_area(height)
    max = 0
    if height[0] > height[-1]
        max= (height[-1]* (height.length-1))
    else
        max= (height[0]* (height.length-1))
    end
    
    s= 0;
    f= height.length-1
    while s < f
        if height[s]< height[f]
            if (height[s] * (f-s)) > max
                max = height[s] * (f-s)
            end
            s+=1
        else
            if (height[f] * (f-s)) > max
                max = height[f] * (f-s)
            end
            f-=1
        end
    end
    max
end

p max_area([1,8,6,2,5,4,8,3,7])
p max_area([4,3,2,1,4])