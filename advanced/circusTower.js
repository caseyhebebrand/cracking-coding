// A circus ia designing a tower routine consisting of people standing atop one another's shoulders. Each person mush be both shorter and lighter than the person below hinm or her. Given the heights and weights of each person in the circus, write a method to compte the largest possible number of people in such tower.

// Input: [[65, 100], [70, 150], [56, 90], [75, 190], [60, 95], [68, 110]]
// Output: 6 ([[56, 90], [60, 95], [65, 100], [68, 110], [70, 150], [74, 190]])
const circusTower = (arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  })

  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > arr[i - 1][0] && arr[i][1] > arr[i - 1][1]) {
      count++;
    }
  }

  return count;
}
