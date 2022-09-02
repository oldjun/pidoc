# time

time 包提供了时间的显示和测量用的函数。

### 内置方法

| 名称 | 描述 |
| ---- | ---- |
| [time](#time) | 获取当前系统的时间戳 |
| [sleep](#sleep) | 当前进程进入睡眠 |
| [strftime](#strftime) | 将时间戳转成字符串格式 |
| [strptime](#strptime) | 将时间字符串格式转时间戳 |

### time

获取当前系统的时间戳

```ts
import time

print(time.time())
```

输出：

```ts
1661686455.1835275
```

### sleep

当前进程进入睡眠

```ts
import time

time.sleep(1000)                        // 睡眠1秒
```

::: tip 提示
sleep 函数的参数单位是毫秒。
:::

### strftime

将时间戳转成字符串格式

```ts
import time

now = time.time()
txt = time.strftime("%Y-%m-%d %H:%M:%S", now)
print(txt)   
```

输出：

```ts
2022-08-28 19:36:49
```

### strptime

将时间字符串格式转时间戳

```ts
import time

txt = '2022-08-28 19:36:49'
ts = time.strptime(txt, "%Y-%m-%d %H:%M:%S")
print(ts)
```

输出：

```ts
1661686609
```