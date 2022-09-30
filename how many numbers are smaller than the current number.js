def smallerNumbersThanCurrent(self, nums):
        count_list = []
        for num1 in nums:
            count = 0
            for num2 in nums:
                if index(num1) != index(num2):
                    if num1> num2:
                        count+=1
            count_list.append(count)
            
        return count_list
