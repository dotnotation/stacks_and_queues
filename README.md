# stacks_and_queues
Code along with Colt Steele's JS algorithms and data structures masterclass

What is a stack?
- data collection
- abstract data structure
    - basically a set of rules for storing data in a certain way
- needs a last in first out (LIFO) data structure 
	- the last element added to the stack will be the first element removed from the stack
	- similar to the call stack
- Where are stacks used?
	- managing function invocations
	- undo/redo functionality 
		- think of how photoshop undos the last action 
		- routing (the history object) is treated like a stack
- array implementation
	- JS does not have a built in method for stacks
        - some languages do have a built in method
    - `let stack = []` 
	- use `.push()`  and `.pop()`  on an array makes a stack
	- can use `.unshift()`  and `.shift()`
		- however this is more cost heavy because everything has to be re-indexed every time  
        - also note that you can either use `push` and `pop` OR `unshift` and `shift` 
- linked list implementation 
_ Big O
    - push and pop O(1) 

What are Queues?
- First in first out (FIFO) data structure