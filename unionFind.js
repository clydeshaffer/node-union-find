function Group (node) {
  this.leader = node;
  this.groupSize = 1;
};

Group.prototype.mergeGroup = function (sourceGroup) {
  this.groupSize += sourceGroup.groupSize;
  sourceGroup.leader.group = this;  
};

function Node (node) {
  this.node = node;
  this.group = new Group(this);
};

Node.prototype.changeGroup = function (targetNode, nodelist) {
  targetNode.getGroup().mergeGroup(this.getGroup());
};

Node.prototype.equals = function (otherNode) {
  return this.getGroup() == otherNode.getGroup();
};

Node.prototype.getGroupSize = function () {
  return this.getGroup().groupSize;
};

Node.prototype.getGroupLeader = function () {
  return this.getGroup().leader.node;
}

Node.prototype.getGroup = function() {
  var group = this.group;
  while (group.leader.group != group) {
    group = group.leader.group;
  }
  return group;
};

function UnionFind (nodes) {
  this.nodes = {};
  this.groupCount = nodes.length;

  this.initGroups(nodes);
};

UnionFind.prototype.initGroups = function (nodes) {
  for (var i = 0; i < nodes.length; i++) {
    this.nodes[nodes[i]] = new Node(nodes[i]);
  }
};

UnionFind.prototype.find = function (node) {
  return this.nodes[node];
};

UnionFind.prototype.inSameGroup = function (node1, node2) {
  if (!this.find(node1)) {
    console.log("node1 couldn't find that referenced group");
    console.log(JSON.stringify(node1));
    return false;
  } else if (!this.find(node2)) {
    console.log("node2 couldn't find that referenced group");
    return false;
  }
  return this.find(node1).equals(this.find(node2));
};

UnionFind.prototype.union = function (group1, group2) {
  if (!this.nodes[group1]) { 
    console.log("group1 was not present!");
    return;
  } else if (!this.nodes[group2]) {
    console.log("group2 was not present!");
    return;
  }

  var smallGroup
    , bigGroup;

  if (this.nodes[group1].getGroupSize() >= this.nodes[group2].getGroupSize()) {
    bigGroup = this.nodes[group1];
    smallGroup = this.nodes[group2];
  } else {
    smallGroup = this.nodes[group1];
    bigGroup = this.nodes[group2];
  }
  smallGroup.changeGroup(bigGroup, this.nodes);
  this.groupCount--;
};

module.exports = UnionFind;
