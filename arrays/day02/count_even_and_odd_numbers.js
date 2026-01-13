function countEvenAndOddNumbers(arr) {
  let eventCount = 0;
  let oddCount = 0;
  if (arr.length == 0) {
    return {
      eventCount: eventCount,
      oddCount: oddCount,
    };
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr.length == 0) {
      return {
        eventCount: eventCount,
        oddCount: oddCount,
      };
    }
    if (arr[i] % 2 == 0) {
      eventCount = eventCount + 1;
    }
    if (arr[i] % 2 != 0) {
      oddCount = oddCount + 1;
    }
  }
  return {
    eventCount: eventCount,
    oddCount: oddCount,
  };
}
let arr = [1, 2, 3, 4, 5];
console.log(countEvenAndOddNumbers(arr));
//Time Complexity O(n)
//Space Complexity O(1)
