class Node {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.children = [];
    }

    appendChildren(node) {
        this.children.push(node);
        node.parent = this;
    }

    _display(prefix = '') {
        // console.log(prefix);
        let char = this.isLastChild ? '└' : '|';
        if(this.parent === undefined) {
            console.log(this.name);
            for(let child of this.children) this.isLastChild?  child._display(prefix) : child._display(prefix);
        }
        else {
            console.log(prefix +`${char}-` + this.name);
            for(let child of this.children) this.isLastChild?  child._display(prefix + '  ') : child._display(prefix + '| ');
        }
    }

    get depth() {
        if(this.parent === undefined) return 0;
        else return this.parent.depth + 1;
    }

    get isLastChild(){
        if(this.parent === undefined) return false;
        return this.parent.children[this.parent.children.length-1] === this
    }
}

class Tree {
    constructor(rootName) {
        this.root = new Node(rootName);
        this.nodes = {};
        this.nodes[rootName] = this.root;
    } 

    insert(nameOfParent, nodeToInsert) {
        this.nodes[nameOfParent].appendChildren(nodeToInsert);
        this.nodes[nodeToInsert.name] = nodeToInsert;
    }

    display() {
        this.root._display();
    }
}

let myTree = new Tree("A");
myTree.insert("A", new Node("a"));
myTree.insert("A", new Node("b"));
myTree.insert("A", new Node("c"));
myTree.insert("a", new Node("aa"));
myTree.insert("b", new Node("ba"));
myTree.insert("ba", new Node("baa"));
myTree.insert("ba", new Node("bab"));
myTree.insert("b", new Node("bb"));
myTree.insert("c", new Node("ca"));
myTree.insert("c", new Node("cb"));
myTree.insert("cb", new Node("cba"));

myTree.display();
