// 观察者
class Observer {
    constructor() {
        this.value = 0

    }
    update(val) {
        console.log(val)
        this.value = val
    }
}
// 观察者列表
class ObserverList {
    constructor() {
        this.observerList = []
    }
    add(observer) {
        return this.observerList.push(observer);
    }
    remove(observer) {
        this.observerList = this.observerList.filter(ob => ob !== observer);
    }
    count() {
        return this.observerList.length;
    }
    get(index) {
        return this.observerList[index];
    }
}
// 目标
class Subject {
    constructor() {
        this.observers = new ObserverList();
    }
    addObserver(observer) {
        this.observers.add(observer);
    }
    removeObserver(observer) {
        this.observers.remove(observer);
    }
    notify(...args) {
        let obCount = this.observers.count();
        for (let index = 0; index < obCount; index++) {
            this.observers.get(index).update(...args);
        }
    }
}
// 目标 实例
const sub = new Subject();
console.log(sub);
// 观察者 实例
const obj1 = new Observer();
console.log(obj1)
// 目标加入观察者
sub.addObserver(obj1);
// 目标通知观察者
sub.notify(1);
