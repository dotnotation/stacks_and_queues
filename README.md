# stacks_and_queues
Code along with Colt Steele's JS algorithms and data structures masterclass

What is a stack?
- data collections
- abstract data structure
- needs a last in first out (LIFO) data structure 
	- the last element added to the stack will be the first element removed from the stack
	- similar to the call stack
- array implementation
	- JS does not have a built in method for this
	- use `.push()`  and `.pop()`  on an array makes a stack
	- can use `.unshift()`  and `.shift()`
		- however this is more cost heavy because everything has to be re-indexed every time  
- linked list implementation