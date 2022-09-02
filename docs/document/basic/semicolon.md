# 分隔符

在 Pi 程序中，每个语句不需要像 C 家族中的其它语言一样以分号 ; 结尾，因为这些工作都将由 Pi 解释器自动完成。

```ts
text = 'hello world'
print(text)

a = 1
b = 2
c = a + b
print(a, b, c)
```


如果你打算将多个语句写在同一行，它们则必须使用分号 ; 

```ts
text = 'hello world'; print(text)
a = 1; b = 2; c = a + b; print(a, b, c)
```

::: tip 提示
建议采用第一种书写规范，尽量一条语句一行代码，可以提升代码的可读性和维护性。