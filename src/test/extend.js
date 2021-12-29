function Parent(name){
    this.name = name
}
Parent.prototype.say = function(){
    console.log("hi",this.name)
}
Parent.isOk =true 
Parent.checkOk =function(){
    return this.isOk
}

function Child(args1,args2){
    this.args2 = args2
    Parent.call(this,args1)
}
Child.prototype= new Parent() //拿到实例方法
Child.prototype.constructor= Child 

const child1 = new Child('aa','bb')
const child2 = new Child('aa','bb')

console.log('child1.__proto__ === child2.__proto__', child1.__proto__ === child2.__proto__)
console.log(child1)
console.log(child2)
// 没法继承静态方法 ， && child1.__proto__ === child2.__proto__'

function inherit(Child , Parent){
    // 继承原型属性 
    Child.prototype = Object.create(Parent.prototype)
    // 修复构造函数
    Child.prototype.constructor = Child
    // 储存超类
    Child.super = Parent
    // 静态属性继承

    // es6 
   if(Object.setPrototypeOf){
         Object.setPrototypeOf(Child,Parent)
   }else{//ie10
    for(let key in Parent){
        if(Parent.hasOwnProperty(key) && key in Child){
            Child[key] = Parent[key]
        }
    }
   }
}

function ChildFn(name){
    this.name = name
}
 inherit(ChildFn,Parent)
 const child3 = new ChildFn('啦啦啦')
 const child4 = new ChildFn('哈哈哈')
