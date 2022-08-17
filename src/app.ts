console.log("Hello World!");

function prepend(numSpaces: number, inputString: string) {
    let spaceString = '';

    for(let i = 0; i < numSpaces; i++) {
        spaceString += ' ';
    }
    return spaceString + inputString; 
  }

  console.log(prepend(5, 'happy'));