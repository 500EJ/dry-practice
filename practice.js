function chooseNum(bigger, ...nums) {
  return bigger ? Math.max(...nums) : Math.min(...nums);
}

function multiplyBiggerNumByTwo(num1, num2) {
  return chooseNum(true, num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return chooseNum(true, num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${chooseNum(true, sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${chooseNum(
    false,
    weight1,
    weight2
  )} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
