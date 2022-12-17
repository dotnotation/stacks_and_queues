class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val){
        // accepts a value and creates a new node with that value
        // if there are no nodes, set the first and last to be the new node
        // if there is at least one node, create a variable that stores the current first property on the stack
        // reset the first property to be the new node
        // set the next property to be the previously created variable
        // increment the size of the stack by 1
    }
}