// implement an algorithm to determine if a string has all unique characters. What if you cannot use an additional data structure?

// isUnique('hello') --> false
// isUnique('abdefghi') --> true

const isUnique = (str) => {
   for (let i = 0; i < str.length; i++) {
     if (str.indexOf(str[i], i + 1) !== -1) {
       return false;
     }
   }
   return true;
};
