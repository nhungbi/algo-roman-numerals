exports.toRoman = function(num) {
    let output = '';
    let romanNumToArabicMap = {'M': 1000 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};

    function ToRoman (input) {
        for (const[key,value] of Object.entries(romanNumToArabicMap)) {
            let evenlyDIvTimes = input/ value
            if (evenlyDIvTimes >=1) {
                output += key
                input -= value
                return input}
}
    
}
while (num != 0) {
    num = ToRoman(num)}

return output
}
