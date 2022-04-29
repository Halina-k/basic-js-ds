const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  start = []
  push(element) {

    this.start[this.start.length] = element

  }

  pop() {
    let lastElem = this.start[this.start.length - 1]
    this.start.length = this.start.length - 1
    return lastElem
  }

  peek() {
    let lastElem = this.start[this.start.length - 1]
    return lastElem
  }
}

module.exports = {
  Stack
};
