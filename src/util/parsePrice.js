export const parsePrice = (priceStr, fixedNum) => {
  const priceString = parseFloat(priceStr.replace("$", ""))
    .toFixed(fixedNum)
    .toString();
  const priceIntegerStr = parseInt(priceString.replace("$", "")).toString();
  const priceDecimalStr = priceString.slice(
    priceIntegerStr.toString().length + 1
  );
  // console.log(priceIntegerStr, priceDecimalStr);
  let parsedPriceIntegerStr = "";
  if (priceIntegerStr.length > 3) {
    for (let i = priceIntegerStr.length - 1; i >= 0; i--) {
      parsedPriceIntegerStr = priceIntegerStr[i] + parsedPriceIntegerStr;
      if ((priceIntegerStr.length - i) % 3 === 0 && i !== 0) {
        parsedPriceIntegerStr = "," + parsedPriceIntegerStr;
      }
    }
  } else parsedPriceIntegerStr = priceIntegerStr;
  // console.log(parsedPriceIntegerStr, priceDecimalStr)
  return (
    parsedPriceIntegerStr +
    (priceDecimalStr.length > 0 ? "." : "") +
    priceDecimalStr
  );
};
