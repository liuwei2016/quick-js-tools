// import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
// import babel from 'rollup-plugin-babel';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

function addEntryBuildConfigs(entryArr){
  //entryArr: ['src/arr/index.ts']
  let results  = [];
  entryArr.forEach((entry) => {
   const obj =  {
      input: entry,
      external: ['ms'],
      plugins: [
        nodeResolve(),
        typescript()
      ],
      output: [
        {  dir:"dist/"+entry.split("/")[1], format: 'es', exports: 'auto' }
      ]
    }
    results.push(obj);
  })
  return results
}

// const results = addEntryBuildConfigs(['src/arr/index.ts'])
// console.log(results)

export default [
  // UMD for browser-friendly build
  {
    input: 'src/index.ts',
    output: {
      name: 'quickJsTools',
			file: pkg.browser,
      format: 'umd',
      exports: 'auto'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      typescript()
    ]
  },
  // CommonJS for Node and ES module for bundlers build
  {
    input: 'src/index.ts',
    external: ['ms'],
    plugins: [
      nodeResolve(),
      typescript()
    ],
    output: [
      {  file: pkg.main, format: 'cjs', exports: 'auto' },
      {  file: pkg.module, format: 'es', exports: 'auto' }
    ]
  },
    ...addEntryBuildConfigs([
      'src/arr/index.ts',
      'src/check/index.ts',
      'src/function/index.ts',
      'src/obj/index.ts',
    ])
];
