function toString(num) {
  return {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
  }[num];
}

module.exports = function toReadable (number) {
  let res = '';
  const hundred = Math.floor(number / 100);
  let tens = number % 100;
  if (number === 0) {
    return toString(number);
  }
  if (hundred) {
    res += `${toString(hundred)} hundred`;
  }
  if (tens < 20 && tens > 9) {
    res = res && res + ' ';
    res += `${toString(tens)}`
  } else {
    tens = Math.floor(tens / 10) * 10;
    const ones = number % 10;
    if (tens) {
      res = res && res + ' ';
      res += `${toString(tens)}`;
    }
    if (ones) {
      res = res && res + ' ';
      res += `${toString(ones)}`;
    }
  }
  return res;
}
