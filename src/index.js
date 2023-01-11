module.exports = function reverse (n) {
  let str = n.toString();
  let reverseInt = '';
  for (let i = str.length; i > 0; i--) {
    reverseInt = reverseInt + str[i - 1];
  }
  if (reverseInt[reverseInt.length - 1] == "-" ) {
    reverseInt = reverseInt.slice(0,-1);
  }
  if (reverseInt[0] == "0" ) {
    reverseInt = reverseInt.slice(0);
  }
  return reverseInt;
}
