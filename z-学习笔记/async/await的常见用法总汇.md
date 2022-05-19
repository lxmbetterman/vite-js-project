### 时间阻塞延迟
```js
 // 延迟函数 ms：延迟毫秒数
const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))
 
 // 一个异步请求函数
const getData = status => new Promise((resolve, reject) => {
    status ? resolve('done') : reject('fail')
})

const getRes = async (data) => {
    try { // try catch 捕获异常报错
        const res = await getData(data)
        const timestamp = new Date().getTime()
        await delay(1000) // 当前线程阻塞一秒
        console.log(res, new Date().getTime() - timestamp) // 1000
    } catch (error) {
        console.log(error)
    }
}

getRes(true) // 隔了1秒
```

### for循环中使用async/await（满足要求）
```js
    // 关于循环发起异步请求（一个请求响应结束后发起另一个）的测试
    async aboutAsyncAwait() {
        const docs = [1, 2, 3, 4, 5, 6, 7]
        for (const number of docs) {
            await new Promise((solve, reject) => {
            setTimeout(() => {
                console.log(number, '???')
                solve(number)
            }, 2000 * Math.random())
            })
        }
    }
```

### async/await 结合异步请求的使用
```js
const user_login = async(userInfo) => { // const { username, password } = userInfo
    userLoading.value = true
    return new Promise((resolve, reject) => {
    $http.get('/login').then(() => {
        currentUser.token = TokenKey
        setToken(TokenKey)
        resolve()
    }).catch((err) => {
        userLoading.value = false
        reject(err)
    })
    })
}
```