# for

循环执行代码块指定的次数，或者当指定的条件为真时循环执行代码块。

::: tip 提示
Pi 程序支持两种`for`循环
- 普通的 `for` 循环
- 高级的 `for in` 循环

通过`break`语句可以跳出循环，通过`continue`语句可以继续下一次循环。
:::

### 遍历整数

示例：

```ts
sum = 0
for i = 1; i <= 100; i++ {
    sum += i
}
print(sum)
```

输出：

```ts
5050
```

### 遍历字符串

示例1：

```ts
text = "hello"
for s in text {
    print(s)
}
```

输出：

```ts
h
e
l
l
o
```

示例2：

```ts
text = "hello"
for i, s in text {
    printf("text[%d] = %s", i, s)
}
```

输出：

```ts
text[0] = h
text[1] = e
text[2] = l
text[3] = l
text[4] = o
```

### 遍历列表

示例1：

```ts
list = ["a", "b", "c"]
for v in list {
    print(v)
}
```

输出：

```ts
a
b
c
```

示例2：

```ts
list = ["a", "b", "c"]
for i, v in list {
    printf("list[%d] = %s", i, v)
}
```

输出：

```ts
list[0] = a
list[1] = b
list[2] = c
```

### 遍历字典

示例1：

```ts
hash = {"a": 1, "b": 2, "c": 3}
for k in hash.keys() {
    print(k)
}
```

输出：

```ts
a
b
c
```

示例2：

```ts
hash = {"a": 1, "b": 2, "c": 3}
for v in hash.values() {
    print(v)
}
```

输出：

```ts
1
2
3
```

示例3：

```ts
hash = {"a": 1, "b": 2, "c": 3}
for k, v in hash {
    printf("hash['%v'] = %v", k, v)
}
```

输出：

```ts
hash['a'] = 1
hash['b'] = 2
hash['c'] = 3
```