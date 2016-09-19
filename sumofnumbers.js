/**
 * Created by Minako on 2016/09/18.
 */

let testNum = [1, 2, 3, 4];
console.log(testNum);

function sumFor(num) {
  let total = 0;
  for(let i = 0; i < num.length; i++) {
    total += num[i];
  }
  return total;
}
console.log(sumFor(testNum));

function sumWhile(num) {
  let total = 0;
  let i = 0;
  while(i < num.length) {
    total += num[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNum));

function sumRecurtion(num) {
  if(num.length === 0)
  {
    return 0;
  }
  else {
    return num[0] + sumRecurtion(num.slice(1, num.length));
  }
}
console.log(sumRecurtion(testNum));

function sumTheSimpleWay(num) {
  let total = 0;
  total = _.reduce(num, function(memo, num) { return memo + num;}, 0);
  return total;
}
console.log(sumTheSimpleWay(testNum));