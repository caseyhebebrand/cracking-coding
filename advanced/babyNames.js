// Given a list of names/frequencies and a list of equivalent names, write an algorithm to print a new list of the true frequency of each name.

// Ex: names = {
//    John: 10,
//    Jon: 3,
//    Davis: 2,
//    Kari: 3,
//    Johnny: 11,
//    Carlton: 8,
//    Carleton: 3,
//    Jonathan: 9,
//    Carrie: 5
// };

// synonyms = {
//   Jonathan: "John",
//   Jon: "Johnny",
//   Johnny: "John",
//   Kari: "Carrie",
//   Carleton: "Carlton"
// }
// Answer: John()
const babyNames = (names, synonyms) => {
  let freq = {};
  let graph = new Graph();

  // create graph with frequencies
  for (let name in names) {
    var node = {
      name: name,
      total: names[name]
    }
    graph.addNode(node);
  }

  // add edges to graph
  for (let name in synonyms) {
    graph.addEdge(name, synonyms[name]);
  }
  // traverse graph to accumulate totals
  var recurse = function(node, key) {
    if (!node.visited) {
      freq[key] ? freq[key] += node.total : freq[key] = node.total;
      node.visited = true;
      for (var edge in node.edges) {
        recurse(graph._nodes[edge], key);
      }
    }
  }

  for (var key in names) {
    recurse(graph._nodes[key], key)
  }

  return freq;
};

const Graph = function() {
  this._nodes = {};
}

Graph.prototype.addNode = function(node) {
  this._nodes[node.name] = this._nodes[node.name] || node;
  this._nodes[node.name].edges = {};
};

Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
}

Graph.prototype.hasEdge = function(node1, node2) {
  if (!this.contains(node1)) {
    return false;
  }

  return !!this._nodes[node1].edges[node2];
}

Graph.prototype.addEdge = function(node1, node2) {

  if (!this.contains(node1) || !this.contains(node2)) {
    return;
  }
  this._nodes[node1].edges[node2] = node2;
  this._nodes[node2].edges[node1] = node1;
}

Graph.prototype.removeEdge = function(node1, node2) {
  if (!this.contains(node1) || !this.contains(node2)) {
    return;
  }
  delete this._nodes[node1].edges[node2];
  delete this._nodes[node2].edges[node1];
}

Graph.prototype.forEachNode = function(cb) {
  for (var node in this._nodes) {
    cb(node);
  }
}
