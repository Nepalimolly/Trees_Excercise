class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      console.log("Current Node Value:", node.val);
      for (let child of node.children) {
        console.log("Adding Child Node Value:", child.val, "to total");
        total += child.val;
        if (child.children.length > 0) {
          console.log("Moving to Child Node:", child.val);
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
  }
}

// Usage and example tree
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
node1.children = [node2, node3];
node3.children = [node4];

const tree = new Tree(node1);

const sum = tree.sumValues();
console.log("Sum of all values in the tree:", sum);
