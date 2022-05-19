# vite-js-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## 关于添加prettier
如果初始化项目添加了eslint和prettier，那么prettier的规则会合并到eslint规则中。
根目录添加.prettierrc.js文件可以配置prettier相关规则
关于eslint和prettier的搭配,花半天时间学吧...



## 关于解决VScode中文件路径使用@所导致的跳转失败问题
在项目根目录下创建jsconfig.json文件，内容如下
```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./",
        "paths": {
          "@/*": ["src/*"]
        }
    },
    "exclude": [
        "node_modules"
    ]
  }
```

## TypeScript intellisense is disabled on template, you can config `"jsx": "preserve"` in tsconfig or jsconfig to enable it, or config `vueCompilerOptions.experimentalDisableTemplateSupport` to disable this prompt.volar
jsconfig.json添加
```json
  "vueCompilerOptions": {
    "experimentalDisableTemplateSupport": true
  }
```

## ref 在模板中的解包
```js
  // todo 当一个 ref 作为一个响应式对象的 property 被访问或更改时，它会自动解包，因此会表现得和一般的 property 一样：
  const count = ref(0)
  const state = reactive({ count })
  console.log(state.count, 'vv') // 0
  state.count = 1
  console.log(count.value, 'vvv') // 1
```

## Mac环境下的vscode默认块注释的快捷键为shift + option + A
## 光标退回上一次的文件位置：option + commond + ↔️ 

## 如何创建一个预置防抖的事件处理器
```js

/* 写法一：这种方法对于被重用的组件来说是有问题的，因为这个预置防抖的函数是 有状态的：
它在运行时维护着一个内部状态。如果多个组件实例都共享这同一个预置防抖的函数，那么它们之间将会互相影响。  */
import { debounce } from 'lodash-es'

export default {
  methods: {
    // 使用 Lodash 的防抖函数
    click: debounce(function () {
      // ... 对点击的响应 ...
    }, 500)
  }
}

/* ！推荐写法二 */
export default {
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 对点击的响应 ...
    }
  }
}
```

### 关于async/await的常见用法总汇