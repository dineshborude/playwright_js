
function reverseSecondWord(str) {

    let arr = str.split(" ");

    let lastWord = arr[1];
    let reversed = "";

    for(let i = lastWord.length-1; i >= 0; i--) {
        reversed = reversed+lastWord[i];
    }

    let result = arr[0] + " " +reversed;

    return result;
    

}



console.log(reverseSecondWord("Dinesh Borude"));