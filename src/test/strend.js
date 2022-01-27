// [] () {}

/**
 * 
 * @param {*} s 
 */
// ([])  => true
// [{)}] => false
// [{}]  => true
function isValid(s){
    const sArr = s.split("")
    let result = false
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let i = 0; i < s.length; i++){
        const char = sArr[i]
        if(char === '(' || char === '[' || char === '{'){
            stack.push(char) //入栈
        }else{ //结束
            const last = stack.pop() //出栈
            if(map[last] !== char){
                return false
            }
        }
    }
        
    return result
}