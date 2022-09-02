# if

条件语句用于基于不同条件执行不同的动作。

```ts
if 条件1 {
    ...
} else if 条件2 {
    ...
} else {
    ...
}
```

### null 判断

示例：

```ts
a = null
if a {
    print("a is not null")
} else {
    print("a is null")
}

b = null
if b == null {
    print("b is null")
} else {
    print("b is not null")
}
```

输出：

```ts
a is null
b is null
```

### bool 判断

示例：

```ts
a = true
if a {
    print("true")
} else {
    print("false")
}
```

输出：

```ts
true
```

### 数字判断

示例：

```ts
a = 0

if a == 0 {
    print("a is 0")
} else {
    print("a is not 0")
}

if a {
    print("a is not null")
} else {
    print("a is null")
}
```

输出：

```ts
a is 0
a is not null
```

### 字符串判断

示例：

```ts
a = ""
if a != "" {
    print("a is not empty")
} else {
    print("a is empty")
}

if a {
    print("a is not null")
} else {
    print("a is null")
}

```

输出：

```ts
a is empty
a is not null
```

### 字符串比较

示例：

```ts
a = "hello"
if a == "hello" {
    printf("a equals to 'hello'")
}
if a > "he" {
    print("yes")
} else {
    print("no")
}
```


输出：

```ts
a equals to 'hello'
yes
```
