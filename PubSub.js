/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if (!this.subscribers[type]) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if (this.subscribers[type]) {
      for (let i = 0, len = this.subscribers[type].length; i < len; i++) {
        if (fn === this.subscribers[type][i]) {
          return this.subscribers[type].splice(i , 1);
        }
      }
    }
  }

  publish(type, ...args) {
    // todo publish
    if (this.subscribers[type]) {
      for (let i = 0, len = this.subscribers[type].length; i < len; i++) {
        this.subscribers[type][i](...args);
      }
    }
  }

}
