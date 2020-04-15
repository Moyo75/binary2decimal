export const binaryToDecimal = (number) => {
  let decimal = 0,
    numLength = number.length;
  const regex = /^[0-1]{1,}$/g;

  if (!regex.test(number)) return false;

  for (let i = 0; i < numLength; i++) {
    decimal += number[i] * Math.pow(2, numLength - i - 1);
  }

  return decimal;
};

// console.log(binaryToDecimal("100001"));
