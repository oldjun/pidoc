# 本地模块

Pi 模块，是一个 Pi 文件，以 .pi 结尾，包含了 Pi 对象定义和 Pi 语句。

::: tip 提示
- 通过 `from` `import` 语句可以导入任何本地模块。
- 本地模块的路径是相对工程的根目录。
- 一个模块只会被导入一次，不管你执行了多少次import。这样可以防止导入模块被一遍又一遍地执行。
- 导入一个模块有两种方式：[全部导入](#全部导入)、[部分导入](#部分导入)。
:::

假设我们预先编写好了一个本地模块 `demo/test.pi`，内容如下：

```ts
num = 123
text = "hello world"

class Foo {
    func __init__(name) {
        this.name = name
    }

    func name() {
        return this.name
    }
}
```

### 全部导入

例如我们想一次性导入模块 `demo/test.pi` 中所有的东西，代码如下：

```ts
from demo.test import *

print(num)
print(text)

f = Foo("foo")
print(f.name())
```

输出：

```ts
123
hello world
foo
```


### 部分导入

从模块中导入一个指定的部分到当前命名空间中。

```ts
from demo.test import num as a, Foo

print(a)

f = Foo("foo")
print(f.name())
```

输出：

```ts
123
foo
```

::: tip 提示
- 部分导入多个内容，每个内容需以逗号,分隔。
- 通过 `as` 关键字可以给导入的内容取一个别名。
:::