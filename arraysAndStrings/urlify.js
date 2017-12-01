// replace all spaces in a string with a %20

// urlify('Mr John Smith   ', 13) --> 'Mr%20John%20Smith'

const urlify = (str, len) => {
  let long = str.length;
   for (let i = 0; i < len; i++) {
     if (str[i] === ' ') {
       str += '%20';
     } else {
       str += str[i];
     }
   }

   return str.substring(long)
}
