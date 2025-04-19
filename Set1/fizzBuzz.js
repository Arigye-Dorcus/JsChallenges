function fizzBuzz(string1, string2) {
    const totalLength = string1.length + string2.length;

    if (totalLength % 3 === 0 && totalLength % 5 === 0) {
        return "FizzBuzz";
    } else if (totalLength % 3 === 0) {
        return "Fizz";
    } else if (totalLength % 5 === 0) {
        return "Buzz";
    } else {
        return "";
    }
}
