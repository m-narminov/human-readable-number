module.exports = function toReadable(number) {
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    let res, hundreds, decimals, units;

    if (+number >= 100) {
        hundreds = numbers[Math.trunc(+number / 100)];

        if (numbers.hasOwnProperty(+number % 100) && +number % 100 !== 0) {
            res = `${hundreds} hundred ${numbers[number % 100]}`;
        } else {
            decimals =
                Math.trunc(+number / 10) % 10 > 0
                    ? numbers[(Math.trunc(+number / 10) % 10) * 10]
                    : "";

            units = +number % 10 > 0 ? numbers[+number % 10] : "";

            res = `${hundreds} hundred ${decimals} ${units}`;
        }
    } else if (+number > 20) {
        decimals = numbers[+number - (number % 10)];

        units = +number % 10 > 0 ? numbers[+number % 10] : "";

        res = `${decimals} ${units}`;
    } else {
        res = numbers[+number];
    }
    res = res.trim();

    return res;
};
