# Given two integers a and b, return the sum of the two integers without using
#  the operators + and -.

# Example 1:
# Input: a = 1, b = 2
# Output: 3

# Example 2:
# Input: a = 2, b = 3
# Output: 5
 

# Constraints:

# -1000 <= a, b <= 1000

def get_sum(a, b)
    result=[]
    if a > 0
        a.times {|i| result<< "hi"}
    else
        a.times {|i| result.pop()}
    end
    if b > 0
        b.times {|i| result<< "hi"}
    else
       (-b).times {|i| result.pop}
    end
    result.length
end

p get_sum(1, -4)
p get_sum(1, 100)
p get_sum(100, -100)