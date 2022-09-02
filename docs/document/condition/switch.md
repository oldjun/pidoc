# switch

用于根据多个不同条件执行不同的动作。

### null 选择

示例：

```ts
a = null
switch a {
    case null:
        print("case null")
    default:
        print("default")
}
```

输出：

```ts
case null
```

::: tip 提示
- switch 语句执行的过程从上至下，直到找到匹配项，匹配项后面也不需要再加 break。
- switch 默认情况下 case 最后自带 break 语句，匹配成功后就不会执行其他 case。
:::

### bool 选择

示例：

```ts
a = true
switch a {
    case true:
        print("case true")
    case false:
        print("case false")
    default:
        print("default")
}
```

输出：

```ts
case true
```

### 数字选择

示例：

```ts
a = 1
switch a {
    case 1, 2, 3:
        printf("case %d", a)
    case 4:
        print("case 4")
    case 5:
        print("case 5")
    default:
        print("default")
}
```

输出：

```ts
case 1
```

::: tip 提示
你可以同时测试多个可能符合条件的值，使用逗号分割它们，例如：`case 1, 2, 3`
:::

### 字符串选择

示例:

```ts
s = "hello"
switch s {
    case "hello":
        print("hello")
    case "world":
        print("world")
    default:
        print("default")
}
```

输出：

```ts
case hello
```
