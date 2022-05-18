// .prettierrc.js
module.exports = {
  printWidth: 80, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: false, //句末使用分号
  singleQuote: true, //使用单引号
  htmlWhitespaceSensitivity: "ignore", // 解决格式化插件Prettier，格式化操作后，结束标签＞跑到下一行的问题
}

// module.exports = {
//   tabWidth: 2,
//   jsxSingleQuote: true,
//   jsxBracketSameLine: true,
//   printWidth: 80,
//   singleQuote: true,
//   semi: false,
//   overrides: [
//     {
//       files: '*.json',
//       options: {
//         printWidth: 200,
//       },
//     },
//   ],
//   arrowParens: 'always',
//   endOfLine: 'auto',
//   vueIndentScriptAndStyle: true,
//   trailingComma: 'all',
//   proseWrap: 'never',
//   htmlWhitespaceSensitivity: 'auto',
// }
