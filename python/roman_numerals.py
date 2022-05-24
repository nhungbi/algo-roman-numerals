def to_roman(num):

    output = ''
    romanNumToArabicMap = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'XL': 40, 
    'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1}

    def single_roman (input, current_output):
        for key,value in romanNumToArabicMap.items():
            evenlyDivTimes = input/value
            if evenlyDivTimes >= 1:
                current_output += key
                input -= value
                return (input, current_output)

    while num > 0:
        num, output = single_roman(num,output)

    return output

    
