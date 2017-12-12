// Design a method to find the frequency of occurences of any given word in a book. What if we were running this algorithm multiple times?

// First generate object with all frequencies in the book; O(n)
const getFrequencies = (book) => {
  let dictionary = {};
  book = book.split(' ');
  for (let i = 0; i < book.length; i++) {
    dictionary[book[i]] ? dictionary[book[i]]++ : dictionary[book[i]] = 1;
  }
  return dictionary;
}

const dictionary = getFrequencies(book);

// Now look up is O(1) time
const wordFrequency = (dictionary, word) => {
    return dictionary[word];
}
