// babel.config.js
module.exports = {
    presets: [[
        "@babel/preset-env", 
        { targets: { node: "current" }},
        "@babel/preset-typescript"
    ]],
    // node: "current" 表示基于你当前 Node 的版本进行编译，其中 current 可替换为 process.versions.node
  };