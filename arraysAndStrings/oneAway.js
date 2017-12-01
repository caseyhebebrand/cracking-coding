// Given two strings, chekc if the are one or zero edits away. An edit is either an insertion, deletion or replacement of a character.

const oneAway = (str1, str2) => {
  if (str1.length > str1.length + 1 || str2.length > str1.length + 1) {
    return false;
  }

  let count1 = {};
  let count2 = {};
  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] ? count1[str1[i]]++ : count1[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    count2[str2[i]] ? count2[str2[i]]++ : count2[str2[i]] = 1;
  }

  var mismatch = 0;
  var longer = str1.length > str2.length ? count1 : count2;

  for (let key in longer) {
    if (!(count1[key] && count2[key])) {
      mismatch++;
    } else if (count1[key] !== count2[key]) {
      mismatch++;
    }
  }

  return mismatch <= 1;
}
