/**"username=azure+green&password=password%21" */

function firstStep(input) {
  // Your code here
  return input.split('&')
}

function secondStep(input) {
  // Your code here
  return input.map((ele)=>ele.split("="));
  

}

function thirdStep(input) {
  // Your code here
  return input.map((ele)=>ele.map((str)=>str.replace("+", " ")));

}

function fourthStep(input) {
  // Your code here
  return input.map((ele) => [ele[0], decodeURIComponent(ele[1])]);
}

function fifthStep(input) {
  // Your code here
  return input.reduce((obj,ele) => {
    obj[`${ele[0]}`] = ele[1];
    return obj;
  }, {});
}

function parseBody(str) {
  // Your code here
  first = firstStep(str)
  second = secondStep(first)
  third = thirdStep(second)
  fourth = fourthStep(third)
  return fifthStep(fourth)
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};