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
        let newNode = new Node(val)
        
        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            let firstNode = this.first
            this.first = newNode
            this.first.next = firstNode
        }
        return ++this.size
    }

    pop(){
        // if no nodes, return null
        // variable to store the first property on the stack
        // if only 1 node, set the first and last to be null
        // else set the first property to be the next property on the current first
        // decrease size by 1 
        // return the value of the node removed 

        if (this.size === 0) return null

        if (this.first === this.last){
            this.last = null
        } 
        let firstNode = this.first
        this.first = firstNode.next
        this.size-- 
        return firstNode.val
    }
}