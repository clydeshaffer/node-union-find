var assert = require('assert')
  , UnionFind = require('../unionFind');

describe('unionFind', function () {
  it('should initialize with the same number of groups as nodes', function () {
    var testUnionFind = new UnionFind([0,1,2]);
    assert.equal(3, testUnionFind.groupCount);
  });

  it('should initialize with each node as the leader of its own group', function () {
    var testUnionFind = new UnionFind([0,1,2]);
    assert.equal(0, testUnionFind.find(0).group.leader);
    assert.equal(1, testUnionFind.find(1).group.leader);
    assert.equal(2, testUnionFind.find(2).group.leader);
  });

  it('should reflect correct number of groups after unioning groups', function () {
    var testUnionFind = new UnionFind([0,1,2]);
    testUnionFind.union(0,1);

    assert.equal(2, testUnionFind.groupCount);
  });

  it('nodes unioned should now be in the same group and have the same leader', function () {
    var testUnionFind = new UnionFind([0,1,2]);
    testUnionFind.union(0,1);

    assert.equal(true, testUnionFind.inSameGroup(0,1));
    assert.equal(false, testUnionFind.inSameGroup(0,2));
    assert.equal(testUnionFind.find(0).group.leader, testUnionFind.find(1).group.leader);
  });
});
