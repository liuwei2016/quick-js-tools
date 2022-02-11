var Singleton = (function(){
     var instance; 
    var CreateSingleton = function (name) { 
    this.name = name; 
    if(instance) {
         return instance; 
        }
    // 打印实例名字
     this.getName(); 
    instance = this; 
    return instance; 
    }
 // 获取实例的名字 
 CreateSingleton.prototype.getName = function() { console.log(this.name) ; return this.name  }
 return CreateSingleton;
 })(); 
 // 创建实例对象 1
  var a = new Singleton('a');
   // 创建实例对象 2
  var b = new Singleton('b'); 
 console.log(a===b, a);