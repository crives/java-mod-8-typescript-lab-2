"use strict";
console.log("Hello World!");
function prepend(numSpaces, inputString) {
    let spaceString = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceString += ' ';
    }
    return spaceString + inputString;
}
console.log(prepend(5, 'happy'));
