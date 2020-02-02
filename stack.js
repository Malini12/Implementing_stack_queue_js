var stack = [];
class mystack {
  constructor() {
    this.maxlen = 4;
    this.count1 = 0;
  }
  pushh(a) {
    if (this.count1 < 4) {
      stack.push(a);
      this.count1 = this.count1 + 1;
      return stack;
    } else {
      return -1;
    }
  }
  popp() {
    if (this.maxlen >= 0) {
      stack.pop();
      this.maxlen = this.maxlen - 1;
      return stack;
    } else {
      return -1;
    }
  }
}
const obj = new mystack();
obj.pushh(10);
obj.pushh(20);
obj.pushh(30);
obj.popp();
