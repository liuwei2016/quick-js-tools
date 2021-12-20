class PubSub {
    constructor(){
        this.subscribers = {
        }
    }
    // 订阅
    subscribe(type,fn){
        if(!Object.prototype.hasOwnProperty.call(this.subscribers,type)){
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    }
    // 取消订阅
    unsubscribe(type,fn){
        let listeners = this.subscribers[type];
        if(!listeners || !listeners.length) return
        if(fn){
            this.subscribers[type] = listeners.filter(v=>v!==fn);
        }else{
            this.subscribers[type] = [];
        }
    }
    // 发布
    publish(type,...args){
        let listeners = this.subscribers[type];
        if(!listeners || !listeners.length) return;
        listeners.forEach(fn => fn(...args));
    }
}

let ob = new PubSub();
ob.subscribe('add', (val) => console.log(val));
ob.subscribe('click', (val) => console.log(val));
ob.publish('add', 1);
ob.publish('click', 333);

ob.unsubscribe('click');
ob.unsubscribe('add');

ob.publish('add', 1);
ob.publish('click', 1);