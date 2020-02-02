var queue = [];
class myqueue {
  constructor() {
    var maxlen = 4;
    var count1 = 0;
    if (count1 >= 4) {
      return -1;
    }
    if (maxlen <= 0) {
      return -1;
    }
  }
  enqueue(a) {
    queue.push(a);
    this.count1 = this.count1 + 1;
    return queue;
  }
  dequeue() {
    queue.shift();
    this.maxlen = this.maxlen - 1;
    return queue;
  }
}
const obj = new myqueue();
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.dequeue();
