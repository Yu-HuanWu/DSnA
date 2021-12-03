# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you
#  climb to the top?

 

# Example 1:

# Input: n = 2
# Output: 2
# Explanation: There are two ways to climb to the top.
# 1. 1 step + 1 step
# 2. 2 steps
# Example 2:

# Input: n = 3
# Output: 3
# Explanation: There are three ways to climb to the top.
# 1. 1 step + 1 step + 1 step
# 2. 1 step + 2 steps
# 3. 2 steps + 1 step
 
# input 4 = 5
# [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2, 2]

# input 5 = 8
# [1, 1, 1, 1, 1] [2, 1, 1, 1] [1, 2, 1, 1] [1, 1, 2, 1] [1, 1, 1, 2]
# [2, 2, 1] [2, 1, 2] [1, 2, 2]

# Constraints:

# 1 <= n <= 45

def climb_stairs(n)
    # return 1 if n==1
    # return 2 if n==2
    # return 3 if n==3

    # return climb_stairs(n-1)+climb_stairs(n-2)
    a = 1
    b = 1
    n.times { 
        tempa = a
        tempb = b
        a = tempb
        b = tempa+tempb
    }
    a
end

p climb_stairs(44)