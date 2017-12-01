// Assuming you have a method isSubstring?, given two strings, check it s2 is a rotation of s1 using only one call to isSubstring?.

// isRotation('waterbottle', 'erbottlewat') --> true;

const isRotation = (s1, s2) => {
  if (s1.length !== s2.length || s1.length === 0) {
    return false;
  }
  return isSubstring(s1 + s1, s2);
}

const isSubstring = (s1, s2) => {
  return s1.includes(s2);
}
