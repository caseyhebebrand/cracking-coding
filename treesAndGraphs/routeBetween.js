//  Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// assume each node looks has properties of value, state and adjacent([])

const routeBetween = (start, end) => {
  let queue = [start];

  while (queue.length > 0) {
      let current = queue.shift();
      current.state = true;
      for (i = 0; i < current.adjacent.length; i++) {
         if (!current.adjacent[i].state) {
           queue.push(current.adjacent[i]);
         }
      }

      if (current === end) {
        return true;
      }
  }
  return false; 
}
