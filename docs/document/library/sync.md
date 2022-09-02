# sync

sync 包提供了基本的同步对象，如互斥锁、异步等待等。

### 内置方法

| 名称 | 描述 |
| ---- | ---- |
| [mutex](#mutex) | 创建互斥锁 |
| [await](#await)| 创建异步等待 |

### mutex

创建互斥锁

```ts
import sync

m = sync.mutex()
m.lock()                            // 加锁
m.unlock()                          // 解锁
```

示例：

```ts
import time
import sync

class Foo {
    func __init__() {
        this.total = 0
    }

    func add(x) {
        this.total += x
    }
}

foo = Foo()

m = sync.mutex()

for i = 0; i < 10; i++ {
    async func(x, foo, mutex) {
        mutex.lock()
        defer mutex.unlock()
        foo.add(x)
    }(i, foo, m)
}

time.sleep(1000)
print(foo.total)
```

输出：

```ts
45
```

### await

创建异步等待

```ts
import sync

a = sync.await()
a.add(1)                                // 计数器加 1
a.done()                                // 计数器减 1
a.wait()                                // 阻塞直到计数器减为 0
```

::: tip 提示
- 异步等待的`add`方法将计数器加上delta，delta可以是负数
- 异步等待的`done`方法将计数器减 1，等价于`add(-1)`
- 如果计数器变为 0，`wait`方法阻塞的所有协程都会释放
- 如果计数器小于 0，将会引发程序异常
- 注意`add`加上正数的调用应在`wait`之前。
::: 

示例：

```ts
import sync

a = sync.await()

for i = 0; i < 10; i++ {
    a.add(1)
    async func(x, await) {
        print(x)
        await.done()
    }(i, a)
}

a.wait()
```

输出：

```ts
9
0
8
4
3
2
7
5
6
1
```