const ZERO = 0;
const ONE = 1;
const TWO = 2;

function getReverseString(number) {
    if (String(number) === '') {
        return '';
    } else {
        return Number(getReverseString(String(number).slice(ONE)) + String(number)[ZERO]);
    }
}

function getNextNum(number) {
    return number + getReverseString(number);
}

function isPalindrome(number) {
    const lengthOfNum = String(number).length;
    const strNum = String(number);
    for (let i = ZERO, j = lengthOfNum - ONE; i < lengthOfNum / TWO; i++, j--) {
        if (lengthOfNum % TWO === ZERO && strNum[i] !== strNum[j]) {
            return false;
        } else if (lengthOfNum % TWO !== ZERO && strNum[i] !== strNum[j]) {
            return false;
        }
    }
    return true;
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
        return findPalindrome(getNextNum(num), ++acc);
    } catch (error) {
        throw new Error('Too much steps to find palindrome');
    }
}

const randomNum1 = 312;
const randomNum2 = 96;

findPalindrome(randomNum1);
findPalindrome(randomNum2);
