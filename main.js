var input = 'I am sorry that people throw plastic in your bedroom it is very gross'
const vowels = ['a', 'e', 'i', 'o', 'u']
var resultArray = []

for (let i = 0; i < input.length; i++) {
  const element = input[i];
  if (element == 'e'){
    resultArray.push(input[i])
  }
  if (element == 'u'){
    resultArray.push(input[i]) 
  }
  for (let j = 0; j < vowels.length; j++) {
      if (element == vowels[j]){
        resultArray.push(element);
        // console.log(element);
      }
  }
};
var resultString = resultArray.join('').toUpperCase();
console.log(resultString);
