# Union-find

This is an implementation of the union-find data structure in Node.js.  While doing a personal project, I did not find the NPM module that fit my needs and created this.  If anyone is interested in this module, or would like addition features, please do not hesitate to contact me.  Thanks.

## Installation
    $ npm install node-union-find

## Usage
    var UnionFind = require('node-union-find');
    var newobj = new UnionFind([1,2,3]);

## Examples
Initialize a union-find data structure:
```javascript
var UnionFind = require('node-union-find');
var unionFindDataStructure = new UnionFind([1,2,3]);
```
Use UnionFind#inSameGroup to figure out if two nodes are in the same group:
```javascript
if(unionFindDataStructure.inSameGroup(1,2)) {
    console.log("1 and 2 are in the same group!");
}
```
Use UnionFind#union to join two groups:
```javascript
console.log("unioning 1 and 2");
unionFindDataStructure.union(1,2);
if(unionFindDataStructure.inSameGroup(1,2)) {
    console.log("1 and 2 are in the same group after unioning!");
}
```
Use UnionFind#find to get the node object, which will contain the group that it belongs to:
```javascript
console.log("1 is in group " + unionFindDataStructure.find(1).getGroupLeader());
console.log("2 is in group " + unionFindDataStructure.find(2).getGroupLeader());
```

## License
(MIT License)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
