export default function shortenNumber(num: number) {
  if (num === 0) {
    return "0";
  }
  if (num < 1) {
    if (num < 0.001) {
      return num.toExponential(3);
    }
    return num.toFixed(3).replace(/\.?0+$/, "");
  }
  if (num < 1000) {
    return num.toLocaleString(undefined, { maximumFractionDigits: 3 });
  }

  const suffixes = ["K", "M", "B", "T"];

  const order = Math.max(
    0,
    Math.min(suffixes.length - 1, Math.floor(Math.log10(num) / 3) - 1)
  );

  const suffix = suffixes[order];

  const shortened = (num / Math.pow(10, order + 3)).toFixed(2);

  const [integerPart, decimalPart] = shortened.split(".");

  return integerPart.length > 2
    ? integerPart + suffix
    : integerPart.length > 1
    ? integerPart + "." + decimalPart[0] + suffix
    : parseFloat(shortened) + suffix;
}
