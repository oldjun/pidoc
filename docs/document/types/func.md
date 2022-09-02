# 函数

函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。

### 函数定义

你可以定义一个由自己想要功能的函数，以下是简单的规则：
- 函数代码块以 `func` 关键词开头，后接函数标识符名称和圆括号()
- 任何传入参数和自变量必须放在圆括号中间
- 函数体由大括号 {} 包裹
- `return` [表达式] 返回一个值给调用方。不带表达式的 `return` 返回 `null`。

### 有名函数

```ts
func sum(x, y) {
    return x + y
}

total = sum(1, 2)                       // total = 3
```

### 匿名函数

```ts
total = func(x, y) {
    return x + y
}(1, 2)

print(total)                            // total = 3
```

### 函数变量

```ts
sum = func(x, y) {
    return x + y
}

total = sum(1, 2)                       // total = 3
```

### 参数传递

#### 1、位置参数

```ts
foo = func(x, y) {
    print(x, y)
}

foo(1, 2)
```

输出：

```ts
1, 2
```

#### 2、关键字参数

```ts
foo = func(x, y) {
    print(x, y)
}

foo(1, y=2)
```

输出：

```ts
1, 2
```

#### 3、默认参数

```ts
foo = func(x, y=2) {
    print(x, y)
}

foo(1)
```

输出：

```ts
1, 2
```

#### 4、包裹参数

```ts
foo = func(x, y, *args, **kwargs) {
    print(x, y)
    print(args)
    print(kwargs)
}

foo(1, 2, 3, name="pi")
```

输出：

```ts
1 2
[3]
{'name': pi}
```

#### 5、解包参数

```ts
list = [1, 2]
hash = {'name': 'pi'}

foo = func(x, y, name) {
	print(x, y)
	print(name)
}

foo(*list, **hash)
```

输出：

```ts
1 2
pi
```

### 函数递归

斐波那契数列：1、1、2、3、5、8、13、21、34、...

```ts
fab = func(n) {
    if (n < 3) {
        return 1
    } else {
        return fab(n-1) + fab(n-2)
    }
}

a = fab(6)                              // a = 8
```

### 高阶函数

```ts
func abs(n) {
	return n > 0 ? n : -n
}

func add(x, y, f) {
	return f(x) + f(y)
}

num = add(1, -1, abs)                   // num = 2
```