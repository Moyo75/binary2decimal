//INITIAL LOGIC
const binary2Decimal = (number) => {
  let valueArray,
    decimal = 0,
    arrayLength;
  const regex = /^[0-1]{1,}$/g;

  if (!regex.test(number)) return false;

  valueArray = [...number].map(Number);
  arrayLength = valueArray.length - 1;
  //   console.log(valueArray);

  for (let i = 0; i < valueArray.length; i++) {
    decimal += valueArray[i] * Math.pow(2, arrayLength - i);
    //     console.log(`${valueArray[i]} times ${2} raised to the power of ${i}`);
  }

  return decimal;

};

// WITHOUT ARRAY

export const binaryToDecimal = (binary) => {
  const regex = /^[0-1]{1,}$/g;

  if(!regex.test(binary)) return false;

  return parseInt(binary, 2);
}

// console.log(bin_to_dec(100001));




// console.log(binaryToDecimal);
