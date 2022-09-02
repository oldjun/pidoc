# while

循环在指定条件为 `true` 时执行代码块。

::: tip 提示：
通过`break`语句可以跳出循环，通过`continue`语句可以继续下一次循环。
:::

示例：

```ts
num = 0
sum = 0
while num <= 100 {
    num++
    sum += num
}
print(sum)
```

输出：

```ts
5050
```

### break

示例：

```ts
num = 0
sum = 0
while true {
    num++
    sum += num
    if num > 100 {
        break
    }
}
print(sum)
```

输出：

```ts
5050
```

### continue

求100以内的偶数之和：

```ts
num = 0
sum = 0
while num <= 100 {
	num++
	if num % 2 == 1 {
		continue
	}
    sum += num
}
print(sum)
```

输出：

```ts
2550
```