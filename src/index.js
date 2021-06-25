const ZERO = 0;
const ONE = 1;

function reverse(number) {
    if (String(number) === '') {
        return '';
    } else {
        return Number(reverse(String(number).slice(ONE)) + String(number)[ZERO]);
    }
}

function isPalindrome(number) {
    if (number === reverse(number)) {
        return true;
    }
    return false;
}

//-------------------------MAIN FUNCTION-----------------//

function findPalindrome(num, acc = ZERO) {
    if (isPalindrome(num)) {
        return {
            result: num,
            steps: acc,
        };
    }
    try {
        return findPalindrome(num + reverse(num), ++acc);
    } catch (error) {
        throw new Error('Too much steps to find palindrome');
    }
}

const randomNum1 = 312;
const randomNum2 = 96;

findPalindrome(randomNum1);
findPalindrome(randomNum2);
