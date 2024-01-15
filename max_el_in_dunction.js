// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

function findMaxEven(arr){
    let maxEvenNumber;
for(let i=0; i< arr.length; i++){
    if (arr[i]%2===0){
    maxEvenNumber=arr[i];
    break;
    }else{
        return "The is no even numbers!";
    }
}
for (let i=0; i<arr.lenght; i++) {
    if (arr[i]>maxEvenNumber && arr [i] % 2 ===0){
        maxEvenNumber=arr[i];
    }
}
return maxEvenNumber;
}

let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven (numbers);
console.log (` the max of ${numbers} is ${max}.`);