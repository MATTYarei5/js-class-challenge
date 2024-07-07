function alternatingPop(items) {
  const result = [];
  let left = 0;
  let right = items.length - 1;

  while (left <= right) {
    result.push(items[left++]);
    if (left <= right) {
      result.push(items[right--]);
    }
  }

  return result;
}

const myArray = [1, 2, 3, 4, 5];
const poppedItems = alternatingPop(myArray);

console.log(poppedItems);
