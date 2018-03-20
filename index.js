function reverseString1(str) {
    let reversedString = [];
    for (i = str.length - 1, j = 0; i >= 0; i-- , j++) {
        reversedString[j] = str[i];
    }
    return reversedString.join("");
}

function reverseString2(str) {
    // const strArr = str.split('');
    // strArr.reverse();
    // return strArr.join('');
    return str.split('').reverse().join('');
}

function reverseString3(str) {
    let reversedString = '';
    for (i = str.length - 1, j = 0; i >= 0; i-- , j++) {
        reversedString = reversedString + str[i];
    }
    return reversedString;
}

let temp = '';
function reverseString4(str) {
    for (i = str.length-1; i >= 0; i--) {
        temp = temp + str[i];
    }
    return temp;

}

function reverseString5(str) {
    temp = '';
    for (i = 0; i<str.length; i++) {
        temp = str[i] + temp;
    }
    return temp;

}

let output1 = reverseString1('hi my name is sachin');
console.log('output1', output1);

let output2 = reverseString2('hello sachin is my name');
console.log('output2', output2);

let output3 = reverseString3('hello sachin is my name');
console.log('output3', output3);

let output4 = reverseString4('hello sachin is my name');
console.log('output4', output4);

let output5 = reverseString5('hello sachin is my name');
console.log('output5', output5);

///////////////////////////////////////////////////////////////////////////////////