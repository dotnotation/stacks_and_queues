class Node {
    constructor(val){
        this.val = val 
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){
        // adding to the end 
        // create a new node with val
        // if no nodes, set the new node node to be first and last property
        // else set the next property on the current last to be the new node
        // set the last property to be new node
        let newNode = new Node(val)

        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode 
            this.last = newNode
        }
        return ++this.size
    }

    dequeue(){
        // remove from the beginning
        // if no first property return null
        // store the first property in a variable
        // see if first === last or size === 1, if so then set first and last to be null
        // else set the first property to be the next property of the first
        // decrease the sie by 1 
        // return the value of the node dequeued 

        if (!this.first) return null
        
        let firstNode = this.first 

        if (this.first === this.last){
            this.first = null
            this.last = null
        }
        this.first = this.first.next 
        this.size--
        return firstNode.val
    }
}