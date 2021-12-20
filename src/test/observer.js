class Observer {
    constructor(value){
        this.value = value||0 ;
    }
    update(fn){
      fn.call(this,this.value);
    }
}

class ObserverList {
    constructor(){
        this.observerList = [];
    }
    add(observer){
        this.observerList.push(observer);
    }
    get(index){
        return this.observerList[index];
    }
    count(){
        return this.observerList.length;
    }
    remove(observer){
        this.observerList = this.observerList.filter(ob => ob !== observer);
    }
    
}

class Subject {
    constructor(){
        this.observers = new ObserverList();
    }
    addObserver(observer){
        this.observers.add(observer);
    }
    removeObserver(observer){
        this.observers.remove(observer);
    }
    notify(...args){
        let obCount = this.observers.count();
        for(let index = 0; index < obCount; index++){
            this.observers.get(index).update(...args);
        }
    }
}

const sub = new Subject();
const obj1 = new Observer(1);
const obj2 = new Observer(2);
sub.addObserver(obj1);
sub.addObserver(obj2);

sub.notify(function(){
    console.log(this.value)
});