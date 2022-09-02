# os

os 包提供了操作系统函数的不依赖平台的接口。

::: tip 提示
- 通过`import`语句可以导入标准库。
- 每个标准库最多可能包含两个部分：[内置属性](#内置属性)、[内置函数](#内置函数)
:::

### 内置属性

| 名称 | 描述 |
| ---- | ---- |
| [name](#name) | 获取操作系统名称 |
| [hostname](#hostname) | 获取主机名 |
| [args](#args) | 获取命令行参数 |

### 内置方法

| 名称 | 描述 |
| ---- | ---- |
| [getwd](#getwd) | 获取当前工作目录 |

#### name

获取操作系统名称

```ts
import os

print(os.name)
```

#### hostname

获取主机名

```ts
import os

print(os.hostname)
```

#### args

获取命令行参数

```ts
import os

print(os.args)
```

#### getwd

获取当前工作目录

```ts
import os

print(os.getwd())
```
