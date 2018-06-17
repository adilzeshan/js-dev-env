import numeral from 'numeral';

const bookValue = numeral(20).format('$0,0.00');
console.log(`I would pay ${bookValue} for this splendid book!`);
